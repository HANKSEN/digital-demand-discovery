# Installation

This repository is designed as a standalone skill repository.

## Claude Code

If your skill installer supports GitHub repositories:

```bash
npx skills@latest add <owner>/digital-demand-discovery
```

The Claude manifest is in `.claude-plugin/plugin.json`.

## Codex

Use the repository as a local skill folder or install it through the Codex skill/plugin mechanism supported by your environment.

The Codex-oriented files are:

- `SKILL.md`
- `agents/openai.yaml`
- `.codex-plugin/plugin.json`

## Manual Installation

Copy or symlink this repository into the skills directory used by your agent runtime.

Common examples:

```bash
# Claude Code personal skills
~/.claude/skills/digital-demand-discovery

# Codex personal skills
~/.agents/skills/digital-demand-discovery
```

## Invocation Examples

```text
Use $digital-demand-discovery to analyze this demand: I want to build an AI agent that helps our sales team manage customer follow-ups.
```

```text
Use $digital-demand-discovery to clarify whether this workflow should be solved with a spreadsheet, automation, low-code app, or custom system.
```
