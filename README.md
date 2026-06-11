# Digital Demand Discovery

A skill for clarifying digitalization, information-management, automation, and AI-agent needs before committing to a solution.

Use it when a user says they want to build a tool, workflow, system, dashboard, agent, database, internal app, or automation, but the real business pain point, process, data flow, and best solution carrier still need to be discovered.

## What It Produces

The skill drives a focused discovery conversation and ends with a structured document:

- Original demand and business context
- First-principles analysis of the real problem
- Core pain point and value goal
- Current process, roles, data, and decision flow
- Key assumptions and validation needs
- Solution options across process, spreadsheet, low-code, software, automation, and agent approaches
- Recommended MVP and future roadmap

## Repository Layout

```text
.
├── SKILL.md
├── references/
├── agents/openai.yaml
├── .claude-plugin/plugin.json
├── .codex-plugin/plugin.json
└── docs/
```

`SKILL.md` is the main entry. `references/` holds model routing, first-principles guidance, questioning patterns, solution patterns, and output templates so the skill can stay maintainable.

## Installation

See [docs/install.md](docs/install.md).

## Compatibility

See [docs/compatibility.md](docs/compatibility.md).

## License

MIT.
