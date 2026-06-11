# Model Router

Use the smallest model set that clarifies the decision. First-principles reasoning is always active; the models below are optional lenses.

## Default Stack

Use this when the user gives a rough demand such as "I want a tool to solve X":

1. First principles
2. Socratic questioning
3. 5 Whys
4. JTBD
5. Assumption mapping

## Situation-Based Routing

| Situation | Use |
|---|---|
| User describes a solution before the problem | First principles, Occam's razor, assumption mapping |
| Pain point is vague | 5 Whys, Socratic questioning, current workaround analysis |
| User wants to build a tool | First principles, JTBD, solution carrier comparison |
| Workflow is messy | User journey, service blueprint, event storming |
| Data is scattered or unreliable | Data object modeling, information-flow analysis, state lifecycle |
| Multiple roles collaborate | RACI, service blueprint, permission and responsibility boundaries |
| Feature priority is unclear | RICE, MoSCoW, Kano when user expectations differ by segment |
| Risk or uncertainty is high | Assumption mapping, pre-mortem, validation planning |
| Long-term planning is requested | Opportunity solution tree, staged roadmap |
| Complex domain logic appears | Event storming, DDD strategic design |

## Model Use Limits

- Do not name models in the final output unless useful to the user.
- Do not apply more than 3-5 models in one pass unless the user explicitly requests a deep workshop.
- Prefer plain business language over academic framing.
- Stop questioning when additional answers would not change the recommendation.
