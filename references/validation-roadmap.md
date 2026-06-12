# Validation and Roadmap

Use this when the need has uncertainty, cost, stakeholder risk, or long-term planning implications.

## Assumption Mapping

Classify assumptions by importance and uncertainty:

| Assumption | Importance | Uncertainty | Validation |
|---|---|---|---|
| [Assumption] | High/Medium/Low | High/Medium/Low | [Test] |

Validate high-importance, high-uncertainty assumptions first.

## Pre-Mortem

Ask: "If this solution failed after launch, what probably caused it?"

Common failure modes:

- Users do not enter data consistently.
- The workflow does not match real operations.
- The agent acts outside a safe boundary.
- Reports exist but no decision changes.
- Automation amplifies bad data.
- MVP includes too many low-value features.
- Token, API, hosting, or maintenance cost grows faster than value.
- Scheduled jobs fail silently or cannot recover from partial failures.

## Roadmap Structure

Use three phases:

1. **MVP**: prove the core pain can be solved.
2. **Operationalization**: permissions, audit, integrations, quality controls, adoption.
3. **Intelligence and scale**: analytics, agent assistance, optimization, cross-system automation.

## Validation Examples

- Interview 3-5 real users about current workaround.
- Run one workflow manually using the proposed data structure.
- Prototype the table/form before custom development.
- Test an agent on historical cases with human review.
- Measure baseline time, error rate, handoff delay, or missed follow-up before building.
- Run a short cost trial for AI/API-heavy workflows and record token/API calls, retries, and manual corrections.
