# Installation

This repository is designed as a standalone skill repository.

## Recommended One-Line Install

Use the skills.sh-compatible installer:

```bash
npx skills@latest add HANKSEN/digital-demand-discovery
```

The installer should let you choose which supported coding agents to install the skill into.

## Claude Code

Use the one-line installer above when possible. For manual personal installation:

```bash
git clone https://github.com/HANKSEN/digital-demand-discovery.git ~/.claude/skills/digital-demand-discovery
```

The Claude Code manifest is in `.claude-plugin/plugin.json`.

## Codex

Use the one-line installer above when your Codex environment supports it. For manual personal installation:

```bash
git clone https://github.com/HANKSEN/digital-demand-discovery.git ~/.agents/skills/digital-demand-discovery
```

The Codex-oriented files are:

- `SKILL.md`
- `agents/openai.yaml`
- `.codex-plugin/plugin.json`

## Manual Installation

If you already cloned this repository somewhere else, symlink it into the skills directory used by your agent runtime.

Examples:

```bash
# Claude Code personal skills
ln -s /path/to/digital-demand-discovery ~/.claude/skills/digital-demand-discovery

# Codex personal skills
ln -s /path/to/digital-demand-discovery ~/.agents/skills/digital-demand-discovery
```

## Invocation Examples

```text
Use $digital-demand-discovery to analyze this demand: I want to build an AI agent that helps our sales team manage customer follow-ups.
```

```text
Use $digital-demand-discovery to clarify whether this workflow should be solved with a spreadsheet, automation, low-code app, or custom system.
```
