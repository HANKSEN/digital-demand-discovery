# Compatibility

| Tool | Status | Notes |
|---|---|---|
| Claude Code | Supported | Uses `.claude-plugin/plugin.json` and standard `SKILL.md`. |
| Codex | Supported / adaptable | Uses standard `SKILL.md`, `agents/openai.yaml`, and `.codex-plugin/plugin.json`. |
| OpenClaw | Experimental | Expected to work if the runtime supports standard `SKILL.md` folders. Add a dedicated manifest when its stable format is confirmed. |
| Hermes | Experimental | Expected to work if the runtime supports standard `SKILL.md` folders. Add a dedicated manifest when its stable format is confirmed. |

## Compatibility Policy

Keep the skill content platform-neutral. Put runtime-specific metadata in adapter files such as `.claude-plugin/`, `.codex-plugin/`, or future platform-specific manifest directories.

Do not duplicate the workflow across platform manifests. `SKILL.md` remains the source of truth.
