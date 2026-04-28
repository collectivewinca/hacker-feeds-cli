"""Hacker Feeds CLI - Agent-native Python CLI for Hacker News, Product Hunt, GitHub Trending, Reddit & V2EX feeds."""

import sys
import os
import json
import shutil
import subprocess
from pathlib import Path

import click

HF_CLI_NAMES = ["hf", "hfeeds", "hacker-feeds-cli"]


def _find_hf_executable() -> str | None:
    for name in HF_CLI_NAMES:
        path = shutil.which(name)
        if path:
            return path
    return None


def _run_hf(argv: list[str], json_mode: bool = False) -> int:
    exe = _find_hf_executable()
    if not exe:
        if "--json" in argv or json_mode:
            click.echo(
                json.dumps(
                    {
                        "error": "hacker-feeds-cli not installed. Run: npm install -g hacker-feeds-cli",
                        "code": "NOT_INSTALLED",
                    }
                )
            )
        else:
            click.echo(
                "hacker-feeds-cli not found. Install with: npm install -g hacker-feeds-cli",
                err=True,
            )
        return 1

    full_cmd = [exe] + argv
    env = os.environ.copy()
    try:
        result = subprocess.run(full_cmd, env=env)
        return result.returncode
    except Exception as e:
        if "--json" in argv or json_mode:
            click.echo(json.dumps({"error": str(e), "code": "EXECUTION_ERROR"}))
        else:
            click.echo(f"Error running hf: {e}", err=True)
        return 1


# ── Main CLI Group ────────────────────────────────────────────────────────────


@click.group(invoke_without_command=True)
@click.option("--json", "use_json", is_flag=True, help="Output results as JSON")
@click.pass_context
def cli(ctx, use_json):
    """Hacker Feeds CLI — Hacker News, Product Hunt, GitHub Trending, Reddit & V2EX feeds.

    This is a thin Python wrapper around the Node.js `hf` / `hfeeds` CLI. All
    subcommands are forwarded directly. Requires Node.js and
    `npm install -g hacker-feeds-cli`.

    Examples:
        hf news
        hf github -s daily -l javascript
        hf --json product -c 5
        hf config --lang en
    """
    ctx.ensure_object(dict)
    ctx.obj["USE_JSON"] = use_json

    if ctx.invoked_subcommand is None:
        # Forward to hf --help when no subcommand
        _run_hf(["--help"], json_mode=use_json)


# ── Feed Commands ─────────────────────────────────────────────────────────────


@cli.command("news")
@click.option("-t", "--top", "top", default=None, help="Number of items (default 10)")
@click.pass_context
def news(ctx, top):
    """Hacker News top stories."""
    args = _build_args(ctx, ["news"], top=("-t", top) if top else None)
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


@cli.command("github")
@click.option("-s", "--since", "since", default=None, help="Time range: daily, weekly, monthly")
@click.option("-l", "--lang", "lang", default=None, help="Programming language filter")
@click.pass_context
def github(ctx, since, lang):
    """GitHub Trending repositories."""
    args = _build_args(ctx, ["github"], since=("-s", since) if since else None, lang=("-l", lang) if lang else None)
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


@cli.command("product")
@click.option("-c", "--count", "count", default=None, help="Number of items (default 10)")
@click.option("-p", "--past", "past", default=None, help="Past days (default 0)")
@click.pass_context
def product(ctx, count, past):
    """Product Hunt launches."""
    args = _build_args(ctx, ["product"], count=("-c", count) if count else None, past=("-p", past) if past else None)
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


@cli.command("reddit")
@click.option("-t", "--topic", "topic", default=None, help="Subreddit name")
@click.option("-s", "--sort", "sort", default=None, help="Sort: rising, hot, top, new, comments")
@click.pass_context
def reddit(ctx, topic, sort):
    """Reddit feed."""
    args = _build_args(ctx, ["reddit"], topic=("-t", topic) if topic else None, sort=("-s", sort) if sort else None)
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


@cli.command("v2ex")
@click.option("-n", "--node", "node", default=None, help="V2EX node name")
@click.pass_context
def v2ex(ctx, node):
    """V2EX feeds."""
    args = _build_args(ctx, ["v2ex"], node=("-n", node) if node else None)
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


@cli.command("devto")
@click.option("-t", "--tag", "tag", default=None, help="Filter by tag")
@click.option("-s", "--sort", "sort", default=None, help="Sort: top, latest, hot")
@click.option("-c", "--count", "count", default=None, help="Number of items")
@click.pass_context
def devto(ctx, tag, sort, count):
    """DEV.to feeds."""
    args = _build_args(
        ctx, ["devto"], tag=("-t", tag) if tag else None, sort=("-s", sort) if sort else None, count=("-c", count) if count else None
    )
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


@cli.command("lobsters")
@click.option("-s", "--sort", "sort", default=None, help="Sort: hottest, rising, top, new")
@click.option("-t", "--tag", "tag", default=None, help="Filter by tag")
@click.option("-c", "--count", "count", default=None, help="Number of items")
@click.pass_context
def lobsters(ctx, sort, tag, count):
    """Lobsters feeds."""
    args = _build_args(
        ctx, ["lobsters"], sort=("-s", sort) if sort else None, tag=("-t", tag) if tag else None, count=("-c", count) if count else None
    )
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


@cli.command("echojs")
@click.option("-s", "--sort", "sort", default=None, help="Sort: latest, hot, best")
@click.option("-c", "--count", "count", default=None, help="Number of items")
@click.pass_context
def echojs(ctx, sort, count):
    """EchoJS feeds."""
    args = _build_args(ctx, ["echojs"], sort=("-s", sort) if sort else None, count=("-c", count) if count else None)
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


# ── Config Command ─────────────────────────────────────────────────────────────


@cli.command("config")
@click.option("-l", "--lang", "lang", default=None, help="Language: en or zh")
@click.option("-p", "--ph-token", "ph_token", default=None, help="Product Hunt API token")
@click.pass_context
def config_cmd(ctx, lang, ph_token):
    """Configure language and Product Hunt token."""
    args = _build_args(ctx, ["config"], lang=("-l", lang) if lang else None, ph_token=("-p", ph_token) if ph_token else None)
    _run_hf(args, json_mode=ctx.obj["USE_JSON"])


# ── Helpers ───────────────────────────────────────────────────────────────────


def _build_args(ctx, subcommand: list[str], **kwargs):
    args = []
    if ctx.obj["USE_JSON"]:
        args.append("--json")
    args.extend(subcommand)
    for val in kwargs.values():
        if val is None:
            continue
        key, v = val
        if v is not None:
            args.extend([key, str(v)])
    return args


def main():
    cli(obj={})


if __name__ == "__main__":
    main()
