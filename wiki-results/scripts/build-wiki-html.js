#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..', '..');
const baseDir = path.join(repoRoot, 'wiki-results');
const wikiDir = path.join(baseDir, 'wiki');
const outDir = path.join(baseDir, 'wiki-html');

const pages = [
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

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rewriteLink(href) {
  return mdToHtmlLink[href] || href;
}

function inlineFormat(text) {
  let out = escapeHtml(text);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
    const safeLabel = inlineFormat(label);
    const safeHref = escapeHtml(rewriteLink(href));
    return `<a href="${safeHref}">${safeLabel}</a>`;
  });
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

fs.mkdirSync(outDir, { recursive: true });

for (const page of pages) {
  const mdPath = path.join(wikiDir, page.md);
  const outPath = path.join(outDir, page.html);
  const md = fs.readFileSync(mdPath, 'utf8');
  const bodyHtml = markdownToHtml(md);
  const html = pageTemplate(page.title, page.nav, bodyHtml);
  fs.writeFileSync(outPath, html, 'utf8');
  process.stdout.write(`Built ${outPath}\n`);
}
