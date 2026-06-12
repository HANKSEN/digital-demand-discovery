# Output Template

Use this structure for the final document unless the user asks for another format.

```markdown
# Digital Demand Insight and Solution Design

## 1. Original Demand
[What the user originally asked for.]

## 2. Business Context
[Where this need appears, who is involved, and why it matters now.]

## 3. First-Principles Analysis
[Basic facts, real-world process, data/decision gap, and why the surface request exists.]

## 4. Core Pain Point
[The most important problem preventing the desired outcome.]

## 5. Target Users and Roles
[Requester, operators, reviewers, decision makers, data producers, and result consumers.]

## 6. Current Process and Breakpoints
[Current workflow and where it fails, slows, duplicates, loses, or distorts information.]

## 7. Data and Information Flow
[Data objects, sources, state changes, ownership, quality risks, and downstream use.]

## 8. Real Goal
[The outcome to improve, ideally with observable signals or metrics.]

## 9. Non-Goals
[What should not be solved in the current phase.]

## 10. Key Assumptions
[Important beliefs that still require confirmation.]

## 10.1 Facts, Assumptions, Inferences, and Open Questions

| Item | Type | Source | Needs Validation |
|---|---|---|---|
| [Item] | Confirmed fact / User preference / Model inference / Assumption / Open question | [Conversation / analysis / external source] | Yes/No |

## 11. Solution Options
[Compare credible carriers such as process, spreadsheet, low-code, automation, agent, or custom software.]

## 12. Recommended Solution
[Recommended path and why it fits the pain, constraints, and validation needs.]

## 13. MVP Scope
[Smallest useful version, core workflow, data objects, roles, and success criteria.]

## 14. Future Roadmap
[Short-term, medium-term, and long-term evolution.]

## 15. Risks and Validation Plan
[Main risks, cheapest validation steps, and open questions.]

## Appendix A. Implementation Notes
[Optional. Put technical architecture, folder structure, scheduling, token strategy, schemas, webhook details, API choices, and operational notes here instead of mixing them into the main demand insight.]
```

## Quality Bar

- Write conclusions, not meeting notes.
- Be explicit about assumptions.
- Make the recommendation falsifiable.
- Separate MVP from future roadmap.
- Keep implementation details in appendices unless they are needed to justify the solution carrier.
- Avoid generic "build a platform" language.
