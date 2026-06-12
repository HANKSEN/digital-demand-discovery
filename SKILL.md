---
name: digital-demand-discovery
description: Use when users ask to clarify a digitalization, information-management, automation, AI-agent, workflow, data, tool-building, PRD, solution-design, or business-process improvement need, especially when the real pain point, target outcome, solution carrier, MVP scope, or future roadmap is unclear.
---

# Digital Demand Discovery

## Core Principle

Use first-principles reasoning as the default posture. Before designing any tool, system, agent, workflow, or document, reduce the request to basic facts: what real-world process is failing, what information is missing or unreliable, which decision or action should improve, and why a digital or intelligent solution is justified.

Do not treat software as the default answer. Consider process change, spreadsheet/database, low-code app, workflow automation, dashboard, knowledge base, AI agent, custom software, or a hybrid solution.

## Operating Rules

- Ask one question at a time when discovery is needed.
- Prefer questions that unlock a decision, expose a hidden assumption, or reduce solution risk.
- Do not run every model. Select the smallest useful model set.
- Keep the conversation moving toward a conclusion document.
- Distinguish facts, assumptions, user opinions, and inferred analysis.
- Surface non-goals early to prevent uncontrolled scope growth.
- Do not define MVP scope or implementation design until the stage gates below are satisfied.
- When the user challenges the process, acknowledge the concern, explain the current stage, and adjust pace or direction.
- If the user asks for a quick answer, provide a lightweight version and state which assumptions remain unresolved.

## Workflow

1. **Intake**
   Restate the original demand. Identify the requester, target users, current context, desired change, known constraints, and visible solution idea.

2. **First-Principles Gate**
   Complete this before focused questioning. Explicitly state the first-principles interpretation of the demand: what real-world process is failing, which information or decision gap exists, and why a digital, automated, or intelligent intervention may be justified. If the request is solution-led, explain why you are stepping back to fundamentals. Read `references/first-principles.md`.

3. **Model Routing**
   Select only the models needed for the situation. Read `references/model-router.md` when the right analysis lens is not obvious.

4. **Focused Questioning**
   Run short discovery loops. Ask one question, incorporate the answer, then decide whether to continue, switch lens, or move to synthesis. Use the minimum coverage and pacing guidance in `references/questioning-patterns.md`.

5. **Problem Reframing**
   Convert surface demand into: business context, real pain point, target outcome, users and roles, current process, data flow, constraints, and key assumptions.

6. **Solution Exploration**
   Compare solution carriers instead of assuming software. Include at least one simpler path when credible. Include cost/resource efficiency when the solution involves AI, API calls, automation, data volume, hosting, or repeated operations. Read `references/solution-patterns.md` for carrier selection.

7. **MVP and Roadmap**
   Define the smallest useful version, explicit non-goals, validation plan, and future phases. Read `references/validation-roadmap.md` when uncertainty, risk, or sequencing matters.

8. **Final Document**
   Produce a structured conclusion document. Use `references/output-template.md` unless the user requests a different format. Keep the main body as demand insight and solution design; put implementation details in appendices.

## Stage Gates

Do not enter MVP definition until:

- Target outcome is clear enough to judge value.
- Current process or workaround and its breakpoints are captured.
- Data or information flow is captured.
- Key constraints, including cost/resource constraints when relevant, are visible.
- At least two solution carriers have been compared, including a simpler option when credible.
- Non-goal candidates are visible.

Do not enter implementation design until:

- The final demand insight document has been delivered or explicitly waived by the user.
- Open questions that affect solution carrier choice are resolved or clearly marked.
- Remaining uncertainty only affects implementation details, not the recommended direction.

## Completion Criteria

End with a document that answers:

- What is the original demand?
- What is the real business pain point?
- What valuable problem should be solved?
- What solution approach best fits the problem and constraints?
- What should be built or changed first?
- What should not be included now?
- What assumptions must be validated?
- How should the solution evolve later?

If the available context is insufficient, still produce the document with an explicit "Open Questions and Assumptions" section.

Before delivering the final document, verify:

- The pain point is stated as an outcome or constraint, not as a missing tool.
- Confirmed facts, assumptions, inferences, and open questions are separated.
- At least one non-software or simpler solution carrier was considered when credible.
- MVP scope is falsifiable: the user can tell whether it worked after a short trial.
- At least three non-goals are explicit for non-trivial requests.
- Risks include validation actions, not only descriptions.
