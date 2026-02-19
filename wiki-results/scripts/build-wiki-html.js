#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..', '..');
const baseDir = path.join(repoRoot, 'wiki-results');
const wikiDir = path.join(baseDir, 'wiki');
const rawDir = path.join(baseDir, 'raw');
const outDir = path.join(baseDir, 'wiki-html');

const wikiPages = [
  { md: 'README.md', html: 'index.html', title: 'Hacker Feeds Wiki', nav: 'home' },
  { md: 'Creators.md', html: 'creators.html', title: 'Creators Wiki', nav: 'creators' },
  { md: 'Solo-Developers.md', html: 'solo-developers.html', title: 'Solo Developers Wiki', nav: 'solo' },
  { md: 'Freelancers.md', html: 'freelancers.html', title: 'Freelancers Wiki', nav: 'freelancers' },
];

const mdToHtmlLink = {
  'README.md': './index.html',
  './README.md': './index.html',
  'Creators.md': './creators.html',
  './Creators.md': './creators.html',
  'Solo-Developers.md': './solo-developers.html',
  './Solo-Developers.md': './solo-developers.html',
  'Freelancers.md': './freelancers.html',
  './Freelancers.md': './freelancers.html',
};

const rawToHtmlMap = {
  'hacker-feeds-creators.md': './results-creators.html',
  'hacker-feeds-solo-developers.md': './results-solo-developers.html',
  'hacker-feeds-freelancers.md': './results-freelancers.html',
};

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function audienceFromFilename(filename) {
  if (filename.includes('creators')) return 'Creators';
  if (filename.includes('solo-developers')) return 'Solo Developers';
  if (filename.includes('freelancers')) return 'Freelancers';
  return filename;
}

function rewriteLink(href) {
  if (mdToHtmlLink[href]) return mdToHtmlLink[href];
  if (rawToHtmlMap[href]) return rawToHtmlMap[href];
  if (href.startsWith('../raw/')) {
    const name = href.split('/').pop();
    return rawToHtmlMap[name] || href;
  }
  if (href.startsWith('../')) {
    return href;
  }
  return href;
}

function inlineFormat(text) {
  let out = escapeHtml(text);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
    const safeLabel = inlineFormat(label);
    const safeHref = escapeHtml(rewriteLink(href));
    return `<a href="${safeHref}">${safeLabel}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  return out;
}

function parseTable(lines, start) {
  const head = lines[start];
  const sep = lines[start + 1];
  if (!head || !sep) return null;
  if (!head.includes('|') || !sep.includes('|')) return null;
  if (!/^\s*\|?\s*[-:]+/.test(sep)) return null;

  const rows = [];
  let i = start;
  while (i < lines.length && lines[i].includes('|')) {
    rows.push(lines[i]);
    i += 1;
  }

  if (rows.length < 2) return null;

  const toCells = (line) =>
    line
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((c) => inlineFormat(c.trim()));

  const headers = toCells(rows[0]);
  const bodyRows = rows.slice(2).map(toCells);

  let html = '<table><thead><tr>';
  headers.forEach((h) => {
    html += `<th>${h}</th>`;
  });
  html += '</tr></thead><tbody>';
  bodyRows.forEach((r) => {
    html += '<tr>';
    r.forEach((c) => {
      html += `<td>${c}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return { html, next: i };
}

function parseFencedCode(lines, start) {
  const first = lines[start].trim();
  if (!first.startsWith('```')) return null;

  const lang = first.replace(/^```/, '').trim() || 'text';
  const buf = [];
  let i = start + 1;
  while (i < lines.length && !lines[i].trim().startsWith('```')) {
    buf.push(lines[i]);
    i += 1;
  }

  if (i < lines.length && lines[i].trim().startsWith('```')) {
    i += 1;
  }

  return {
    html: `<pre><code class="language-${escapeHtml(lang)}">${escapeHtml(buf.join('\n'))}</code></pre>`,
    next: i,
  };
}

function markdownToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  let i = 0;
  let html = '';
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) {
      html += '</ul>';
      inUl = false;
    }
    if (inOl) {
      html += '</ol>';
      inOl = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    const codeBlock = parseFencedCode(lines, i);
    if (codeBlock) {
      closeLists();
      html += codeBlock.html;
      i = codeBlock.next;
      continue;
    }

    const table = parseTable(lines, i);
    if (table) {
      closeLists();
      html += table.html;
      i = table.next;
      continue;
    }

    if (!trimmed) {
      closeLists();
      i += 1;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      closeLists();
      html += `<h3>${inlineFormat(trimmed.slice(4))}</h3>`;
      i += 1;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      closeLists();
      html += `<h2>${inlineFormat(trimmed.slice(3))}</h2>`;
      i += 1;
      continue;
    }

    if (trimmed.startsWith('# ')) {
      closeLists();
      html += `<h1>${inlineFormat(trimmed.slice(2))}</h1>`;
      i += 1;
      continue;
    }

    const ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (ulMatch) {
      if (!inUl) {
        if (inOl) {
          html += '</ol>';
          inOl = false;
        }
        html += '<ul>';
        inUl = true;
      }
      html += `<li>${inlineFormat(ulMatch[1])}</li>`;
      i += 1;
      continue;
    }

    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      if (!inOl) {
        if (inUl) {
          html += '</ul>';
          inUl = false;
        }
        html += '<ol>';
        inOl = true;
      }
      html += `<li>${inlineFormat(olMatch[1])}</li>`;
      i += 1;
      continue;
    }

    closeLists();
    html += `<p>${inlineFormat(trimmed)}</p>`;
    i += 1;
  }

  closeLists();
  return html;
}

function navHtml(active) {
  const item = (id, href, label) =>
    `<a ${active === id ? 'class="active" ' : ''}href="${href}">${label}</a>`;

  return [
    item('home', './index.html', 'Home'),
    item('creators', './creators.html', 'Creators'),
    item('solo', './solo-developers.html', 'Solo Developers'),
    item('freelancers', './freelancers.html', 'Freelancers'),
    item('results', './results-by-day.html', 'Results by Day'),
  ].join('\n        ');
}

function pageTemplate(title, nav, bodyHtml) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <h2 class="brand">Hacker Feeds Wiki</h2>
      <nav class="nav">
        ${navHtml(nav)}
      </nav>
    </aside>

    <main class="content">
      <section class="card">
        ${bodyHtml}
      </section>
    </main>
  </div>
</body>
</html>
`;
}

function parseRawReport(filename, content) {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const generatedMatch = content.match(/^Generated on:\s+(.+)$/m);
  const runtimeMatch = content.match(/^Runtime note:\s+(.+)$/m);

  const sections = [];
  const sectionRegex = /##\s+([^\n]+)\n\n\*\*Query:\*\*\s+([^\n]+)\n\n\*\*Command:\*\*\n```bash\n([\s\S]*?)\n```\n\n\*\*Output:\*\*\n```text\n([\s\S]*?)\n```/g;
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    sections.push({
      title: match[1].trim(),
      query: match[2].trim(),
      command: match[3],
      output: match[4],
    });
  }

  const generatedOn = generatedMatch ? generatedMatch[1].trim() : 'Unknown';
  const day = /^\d{4}-\d{2}-\d{2}/.test(generatedOn) ? generatedOn.slice(0, 10) : 'Unknown';

  return {
    filename,
    audience: audienceFromFilename(filename),
    title: titleMatch ? titleMatch[1].trim() : filename,
    generatedOn,
    runtimeNote: runtimeMatch ? runtimeMatch[1].trim() : '',
    day,
    sections,
    htmlFile: rawToHtmlMap[filename] ? rawToHtmlMap[filename].replace('./', '') : `${filename}.html`,
  };
}

function renderRawReportBody(report) {
  let body = '';
  body += `<h1>${escapeHtml(report.title)}</h1>`;
  body += `<p class="meta">Audience: ${escapeHtml(report.audience)} | Generated: ${escapeHtml(report.generatedOn)}</p>`;
  if (report.runtimeNote) {
    body += `<p class="meta">Runtime: ${escapeHtml(report.runtimeNote)}</p>`;
  }

  report.sections.forEach((section, idx) => {
    body += '<article class="report-section">';
    body += `<h2>${escapeHtml(section.title)}</h2>`;
    body += `<p><strong>Query:</strong> ${escapeHtml(section.query)}</p>`;
    body += '<h3>Command</h3>';
    body += `<pre><code class="language-bash">${escapeHtml(section.command)}</code></pre>`;
    body += '<details class="output-details" open>';
    body += '<summary>Output</summary>';
    body += `<pre><code class="language-text">${escapeHtml(section.output)}</code></pre>`;
    body += '</details>';
    body += '</article>';
  });

  return body;
}

function renderResultsByDayBody(reports) {
  const groups = new Map();
  reports.forEach((report) => {
    if (!groups.has(report.day)) groups.set(report.day, []);
    groups.get(report.day).push(report);
  });

  const days = Array.from(groups.keys()).sort((a, b) => (a < b ? 1 : -1));

  let body = '<h1>Results by Day</h1>';
  body += '<p class="meta">Daily index of generated feed reports across audiences.</p>';

  days.forEach((day) => {
    body += `<h2>${escapeHtml(day)}</h2>`;
    body += '<table><thead><tr><th>Audience</th><th>Generated</th><th>Queries</th><th>Page</th></tr></thead><tbody>';
    groups.get(day).forEach((report) => {
      body += '<tr>';
      body += `<td>${escapeHtml(report.audience)}</td>`;
      body += `<td>${escapeHtml(report.generatedOn)}</td>`;
      body += `<td>${report.sections.length}</td>`;
      body += `<td><a href="./${escapeHtml(report.htmlFile)}">Open report</a></td>`;
      body += '</tr>';
    });
    body += '</tbody></table>';
  });

  return body;
}

fs.mkdirSync(outDir, { recursive: true });

for (const page of wikiPages) {
  const mdPath = path.join(wikiDir, page.md);
  const outPath = path.join(outDir, page.html);
  const md = fs.readFileSync(mdPath, 'utf8');
  const bodyHtml = markdownToHtml(md);
  const html = pageTemplate(page.title, page.nav, bodyHtml);
  fs.writeFileSync(outPath, html, 'utf8');
  process.stdout.write(`Built ${outPath}\n`);
}

const rawFiles = fs.readdirSync(rawDir).filter((name) => name.endsWith('.md'));
const reports = rawFiles
  .map((filename) => parseRawReport(filename, fs.readFileSync(path.join(rawDir, filename), 'utf8')))
  .sort((a, b) => (a.generatedOn < b.generatedOn ? 1 : -1));

reports.forEach((report) => {
  const outPath = path.join(outDir, report.htmlFile);
  const bodyHtml = renderRawReportBody(report);
  const html = pageTemplate(`${report.audience} Results`, 'results', bodyHtml);
  fs.writeFileSync(outPath, html, 'utf8');
  process.stdout.write(`Built ${outPath}\n`);
});

const resultsByDayPath = path.join(outDir, 'results-by-day.html');
const resultsByDayHtml = pageTemplate('Results by Day', 'results', renderResultsByDayBody(reports));
fs.writeFileSync(resultsByDayPath, resultsByDayHtml, 'utf8');
process.stdout.write(`Built ${resultsByDayPath}\n`);
