# FPF Pattern Catalog

Condensed reference of the FPF specification pattern language. Load on-demand when specific pattern lookup is needed, not during normal reasoning.

> Source: [FPF Core Specification](https://github.com/ailev/FPF/blob/main/FPF-Spec.md) by Anatoly Levenchuk, May 2026.

## Part A: Kernel Architecture

The immutable ontological core.

### Ontology Core

| ID | Pattern | When to Apply |
|----|---------|---------------|
| A.1.1 | Responsibility/Method/Plan/Execution separation | Responsibilities, methods, plans, and execution records are mixed into one story. Apply when a team conflates "what we should do" (plan) with "what we're capable of" (method) or "what actually happened" (work). Separate them before evaluating any of them. |
| A.3.3 | Temporal dynamics awareness | Time changes state, inertia and resistance affect what's claimable. Apply when a decision or claim depends on assumptions that degrade over time — freshness matters. |
| A.6 | Boundary discipline / Claim routing | Contract, API, SLA, or protocol language mixes rules, gates, duties, and evidence into one undifferentiated bundle. Apply to unbundle what a boundary actually carries before crossing it. |
| A.6.B | Boundary basis | Need to establish what a boundary actually separates — which contexts, which responsibilities, what crosses. Apply before designing bridges or translations. |
| A.6.C | Claim Register | Need atomic claim routing across boundaries — each claim is independently traceable, verifiable, and assignable. Apply when claims come bundled and need splitting. |
| A.6.P | Quality language overload | Boundary text hides overloaded quality or action words. Apply when "fast," "reliable," "safe" appear in contracts without explicit characteristics — they mean different things to different parties. |
| A.6.Q | Quality word unpacking | Quality words like "fast" or "safe" need explicit characteristics with scales. Apply after A.6.P has detected the overload. |
| A.6.A | Action word unpacking | Action words like "report," "approve," "notify" need explicit responsibility assignment. Apply when it's unclear who does what across a boundary. |
| A.6.T | Temporal signature | Boundary claims carry time-dependent validity — a claim adequate today may be stale tomorrow. Apply when the timing of claims matters. |
| A.6.RSIG | Relational signature | Need to identify what kind of description you're reading — is it a prescription, a report, an explanation, a permission? Apply when the intent of a boundary statement is ambiguous. |
| A.6.3.CR | Claim Record | Need formal claim documentation with status, source, and evidence trail. Apply when claims cross audit or regulatory boundaries. |
| A.6.3.RT | Routing Table | Need to map claims to processing contexts based on type, maturity, or responsibility. Apply when multiple teams or agents handle different claim categories. |
| A.6.3.CSC | Cross-schema comparison | Need to compare claims across different schema frameworks. Apply when two systems use different claim structures but need alignment. |

### Transformer Quartet

| ID | Pattern | When to Apply |
|----|---------|---------------|
| A.15 | Separating role/method/plan/work | The four transformer categories — role, method description, method, and work — are conflated. Apply when a system's defined role is confused with its actual work, or when a written method is taken as the executed work. |
| A.15.2 | Role assignment | Need to assign transformer roles to systems. Apply when a system takes on new responsibilities — who does what, with what authority. |
| A.15.3 | Method assignment | Need to assign methods to role-bearing systems. Apply when a system needs a defined capability to fulfill its role. |
| A.15.4 | Publication/use boundary | A publication, screenshot, dashboard, or display is being treated as permission to act. Apply when someone acts on a summary without checking the underlying claim-bearing source. |
| A.16 | Language-state classification | Ideas are being presented as settled claims before they're ready. Apply when an insight, concern, or hypothesis is treated as a requirement prematurely. |
| A.16.1 | Maturity level assignment | Need to classify how mature a claim or idea is — partly-said, candidate, settled. Apply to tag ideas by readiness. |
| A.16.2 | Routing by maturity | Need to route claims based on their maturity level. Apply so that early-stage ideas go to exploration, settled claims go to execution. |

### Characteristic Spaces & Comparison

| ID | Pattern | When to Apply |
|----|---------|---------------|
| A.17 | Characteristic declaration | Need to define what matters for comparison. Apply before comparing alternatives — don't compare without declared characteristics. |
| A.18 | Scale definition | Need to define how characteristics are measured. Apply after A.17 — each characteristic needs a scale (ordinal, cardinal, categorical) and an indicator. |
| A.19 | Admissible comparison | Need to compare alternatives honestly with explicit criteria. Apply when making a selection among options — each alternative is rated against the same characteristic set. |
| A.19:0 | Comparison frame | Need the container for comparison work — the set of alternatives, characteristics, and rules. Apply before building a comparison matrix. |
| A.19.CN | Candidate set management | Need to manage which alternatives are in play. Apply to add, remove, or deprioritize options in the comparison set without losing transparency. |

## Part B: Trans-disciplinary Reasoning

Logic of composition and trust across contexts.

| ID | Pattern | When to Apply |
|----|---------|---------------|
| B.3 | Engineering justification / evidence transport | Trust, evidence, or engineering justification must travel across context boundaries. Apply when a claim from one context supports a decision in another — the evidence must survive the crossing. |
| B.4.1 | Pre-abductive routing | Need to route problems to the appropriate reasoning mode — deductive, inductive, abductive. Apply before framing a problem: is this analysis, exploration, or design? |
| B.5 | Cross-context reasoning | Moving reasoning across contexts without semantic collapse. Apply when a term or claim moves from one bounded context to another and must not lose or gain meaning silently. |
| B.5.1 | Bridge construction | Need explicit translation between contexts. Apply when two contexts use the same term differently — build a bridge that translates between them. |
| B.5.2.0 | Language-state bridge | Partly-said ideas need cross-context transport. Apply when an emerging concept in one context matters to another but isn't settled enough to state firmly. |
| B.5.2.1 | Characteristic bridge | Characteristics need cross-context mapping. Apply when the same quality is measured differently in different contexts and you need to compare across them. |

## Part C: Kernel Extensions

Pluggable domain-specific calculi and characterization families.

### Search, Generation, Creativity

| ID | Pattern | When to Apply |
|----|---------|---------------|
| C.2.2a | Preservation-and-support note | A serious cue, concern, or emerging idea is too important to ignore but too early to present as a settled claim. Apply to write a note that preserves the observation, states its maturity, and recommends next inspection. |
| C.2.LS | Language-state handling | Work is partly-said — an idea has been noticed but not yet articulated as a claim, requirement, or specification. Apply to track maturity and route to the appropriate endpoint pattern when ready. |
| C.2.4-C.2.7 | LS endpoint patterns | A partly-said item reaches an endpoint — it becomes a claim, a requirement, a specification, or is discarded. Apply when C.2.LS tracking concludes. |
| C.11 | Choose-now vs probe-more gate | Must decide between committing with current evidence or gathering more. Apply when a key claim is `assumed` or `unknown` — the gate helps decide: commit, probe more, or defer. |
| C.16 | Timing/freshness evaluation | Delay or staleness changes claim usability. Apply when the age of a measurement or observation affects whether it can support a decision. |
| C.17 | Creative search initiation | Need to search beyond known options. Apply when the alternative set feels exhausted — initiate generative search. |
| C.18 | Generator policy | Open-ended generation without premature convergence. Apply when exploring a space where options are not known in advance — generate, evaluate, retain diversity. |
| C.19 | Explore/exploit policy | Must balance exploration vs exploitation. Apply when resources are limited — explore new options or exploit known ones? The policy sets the ratio. |
| C.24 | Checkpoint-return planning | Need to plan callbacks or checkpoints for long-running reasoning. Apply when a decision sequence has intermediate steps that need review before proceeding. |
| C.27 | Temporal claim adequacy | Timing, delay, effort, and resistance change whether a claim is usable. Apply when a claim's validity depends on when it was made and how much has changed since. |
| C.28 | Causal-use repair | Correlation is being treated as justifying intervention or responsibility. Apply when a report of association is used as evidence that a specific action caused a specific outcome — separate observation, prediction, and intervention. |

## Part D: Multi-scale Ethics & Conflict

| ID | Pattern | When to Apply |
|----|---------|---------------|
| D.5 | Counterfactual support | Need to reason about what would have happened differently under alternative choices. Apply when the justification for a decision depends on comparing reality with a plausible alternative path. |

## Part E: Constitution & Authoring

Governance of the framework itself.

| ID | Pattern | When to Apply |
|----|---------|---------------|
| E.1 | Vision | Need to understand FPF's purpose and scope. Apply when deciding whether FPF fits a problem or when introducing FPF to a new team. |
| E.2 | Pillars | Need to understand FPF's non-negotiable foundations — bounded contexts, separate concerns, evidence tagging, traceable outputs. Apply when the framework's core principles are questioned. |
| E.8 | Pattern authoring | Need to write or review FPF patterns. Apply when extending the framework with new patterns — follow the authoring protocol for consistency. |
| E.9 | DRR (Decision Rationale Record) | A normative decision is made that others will reference. Apply to produce a formal decision record that survives personnel changes and provides an audit trail. |
| E.17 | Publication / display gate | A publication, screenshot, dashboard, credential, or display is being treated as permission to act. Apply before treating any output as authorizing action — check the claim-bearing source. |
| E.17.EFP | Explanation-from-publication | Need an explanation derived from a published artifact. Apply when someone asks "what does this mean" about a screen or dashboard — the explanation must be traceable to the source. |
| E.17.ID.CR | Identity claim record | Need to track what an output is about and what it claims. Apply when multiple outputs share a source but address different aspects. |
| E.17.AUD.LHR | Audit log for human readers | Need an audit trail that human readers can follow. Apply when the decision trail must be inspectable by non-specialists. |
| E.17.AUD.OOTD | Object-of-thought display | Need to render an object-of-thought for audit review. Apply when the reasoning structure itself must be displayed, not just its conclusions. |
| E.19 | Review gates | Need to review patterns against FPF criteria. Apply during pattern authoring (E.8) to validate consistency. |
| E.TGA | Transduction graph architecture | Need to map the route from principles to work. Apply when a project needs to trace how foundational principles connect to concrete execution steps. |
| TEVB | TEVB reference | Companion to E.TGA for evidence routing. Apply alongside E.TGA to track how evidence flows through the transduction graph. |

## Part F: Unification Suite

Techniques for aligning vocabularies across disciplines.

| ID | Pattern | When to Apply |
|----|---------|---------------|
| F.9 | Bridge discipline | Need a dedicated bridging discipline between contexts. Apply when two contexts interact frequently and the bridge needs its own maintenance and governance. |
| F.11 | Method/work vocabulary alignment | Method descriptions and actual work records use incompatible vocabularies. Apply when what people say they do differs from what records show they did. |
| F.17 | UTS (Unified Term Sheet) | Vocabulary must be stabilized across contexts. Apply when the same term means different things in different contexts — produce a UTS with sense cells per context, risky aliases, and bridge notes. |
| F.18 | Name Cards | Need better names for ambiguous roles, entities, or artefacts. Apply when an existing label is misleading — design a name card with candidate names, trade-offs, and a selection recommendation. |

## Part G: State-of-the-Art Patterns Kit

Tools for harvesting and building governed knowledge portfolios.

| ID | Pattern | When to Apply |
|----|---------|---------------|
| G.0 | SoTA kit scaffolding | The first deliverable is a reusable search, harvest, or portfolio scaffold. Apply before starting a state-of-the-art analysis — define scope, output format, and refresh policy upfront. |
| G.1 | Discipline scope declaration | Need to bound what a SoTA search covers. Apply to define which schools, methods, and outputs are in scope and which are excluded. |
| G.2 | TraditionCards | Need to capture competing schools of thought. Apply to document each tradition's ontology, methods, key results, and open questions in a structured card format. |
| G.3 | OperatorCards | Need to capture update rules and operators. Apply to document how each tradition transforms inputs to outputs — the core mechanism. |
| G.4 | SoTA pack assembly | Need to assemble harvested knowledge into a governed, selector-ready portfolio. Apply after collecting TraditionCards and OperatorCards — package into a reusable pack. |
| G.5 | Selector/dispatcher patterns | Need to select appropriate options from a governed portfolio. Apply when choosing among alternatives in the portfolio — the selector uses declared characteristics, not intuition. |
| G.9 | Counterfactual reasoning | Need to reason about interventions and alternatives that differ from what actually happened. Apply when evaluating what would have happened under a different choice. |

## Entry Families Quick Reference

Choose your first entry by what you're really trying to decide, stabilize, or publish, not by document order.

| # | Entry Family | First Inspect | Typical Stabilizing Result |
|---|-------------|---------------|---------------------------|
| 1 | Project alignment | A.1.1, A.15, A.15.2/A.15.3, B.5.1 | Separation of responsibility/method/plan/execution + first worksheet |
| 2 | Partly-said / language-state discovery | C.2.2a, C.2.LS, C.2.4-C.2.7, A.16/A.16.1/A.16.2, B.4.1/B.5.2.0 | Short preservation note naming maturity and next inspection |
| 3 | Boundary unpacking / claim routing | A.6, A.6.B, A.6.C | Claim Register or routed atomic claim set |
| 4 | Admissible comparison / local choice | A.19:0, A.17-A.19, A.19.CN, C.11 | Comparison frame, ChoiceResult, selected-set publication |
| 5 | Generator / SoTA / NQD / OEE portfolio | A.0, B.5.2.1, C.18, C.19, G.0, G.1, G.2, G.5 | Reusable kit: scope, schools, variants, descriptor map, archive policy |
| 6 | Publication, rendering, explanation | E.17, A.15.4, A.6.3.CR, A.6.3.RT, A.6.3.CSC, E.17.EFP, E.17.ID.CR, E.17.AUD | Publication/use-boundary note with claim-bearing source trace |
| 7 | Temporal claim adequacy | C.27, C.16, A.3.3, A.6.T | Temporal adequacy note: window, rhythm, resistance, recheck trigger |
| 8 | Causal-use / counterfactual repair | C.28, A.10, B.3, D.5, G.5, G.9 | Causal-use repair note separating observation, prediction, intervention |

## Core Ideas (Plain Language)

1. **Local meaning, explicit translation.** Terms live inside bounded contexts. Cross-context reuse needs an explicit bridge.
2. **One underlying reality, many aligned outputs.** Engineering, management, research outputs are projections of same work.
3. **Separate systems, roles, method descriptions, methods, plans, and executed work.** Descriptions, capabilities, plans, and occurrences are different things.
4. **Trust has structure and grounding.** Claims say how formal they are, where they apply, what evidence supports them, which carriers anchor them.
5. **Composition matters across scales.** Same logic survives when parts aggregate into wholes.
6. **Keep search wide before selection.** Diversity of options matters before choosing a winner.
7. **Build from first principles when categories break.** FPF is for organizing SoTA and growing new abstractions.

## Older Abduction Loop (Legacy)

`A.0 → A.1-A.3 → B.3 → F.17 → E.9`

Still available but not the universal default. Use B.3 when engineering justification/trust/evidence transport is part of the present question. Use E.9 (DRR) when normative change or durable canon rationale must actually be published.
