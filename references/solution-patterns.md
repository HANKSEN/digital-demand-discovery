# Solution Patterns

Compare solution carriers before recommending what to build.

## Carrier Options

| Carrier | Best When | Watch For |
|---|---|---|
| Process change | The pain is unclear ownership, sequence, or rule enforcement | May fail without data capture |
| Spreadsheet | Small team, low volume, flexible schema | Weak permissions, audit, automation |
| Multi-dimensional table | Structured data, light workflow, quick deployment | Can become a hidden system |
| Low-code app | Internal workflow needs forms, states, permissions | Platform lock-in and edge cases |
| Automation | Repeated handoff, notification, sync, transformation | Bad inputs create bad automation |
| Dashboard | Decisions depend on visibility and trends | Metrics without action do not solve pain |
| Knowledge base | Repeated knowledge retrieval or standardization | Stale content and ownership gaps |
| AI agent | Repeated search, writing, routing, classification, analysis, or action loops | Requires clear boundaries and verification |
| Custom software | Complex workflow, scale, integration, permissions, domain logic | Higher cost and longer feedback cycle |
| Hybrid | Real needs span workflow, data, automation, and intelligence | Needs explicit phase boundaries |

## Recommendation Logic

Prefer the simplest carrier that can validate the core value:

1. If the process itself is unclear, do not build complex software first.
2. If the data model is simple and volume is low, start with table or low-code.
3. If the job is repeated and rules are stable, use automation.
4. If the job needs judgment, language, retrieval, or synthesis, consider an agent with human review.
5. If permissions, integrations, scale, or domain rules are complex, consider custom software.

## Solution Comparison Format

```markdown
### Option A: [Carrier]
- Fit:
- Cost:
- Cost/resource profile:
- Risk:
- Validation speed:
- Data/control:
- Stability:
- Existing workflow impact:
- Why choose / not choose:
```

## Scorecard

Use this when the recommendation could be disputed or when several carriers look viable:

| Option | Validation speed | Initial cost | Maintenance cost | Data control | Stability | Extensibility | Workflow fit |
|---|---|---|---|---|---|---|---|
| [Option] | High/Med/Low | High/Med/Low | High/Med/Low | High/Med/Low | High/Med/Low | High/Med/Low | High/Med/Low |

For AI, automation, or data-heavy solutions, explicitly discuss token/API cost, caching, retry behavior, logging, scheduling, rate limits, and failure recovery when relevant.
