# FPF Pattern Catalog

Condensed reference of the FPF specification pattern language. Load on-demand when specific pattern lookup is needed, not during normal reasoning.

> Source: [FPF Core Specification](https://github.com/ailev/FPF/blob/main/FPF-Spec.md) by Anatoly Levenchuk, May 2026.

## Part A: Kernel Architecture

The immutable ontological core.

### Ontology Core

| ID | Pattern | Use When |
|----|---------|----------|
| A.1.1 | Responsibility/Method/Plan/Execution separation | These four are being mixed into one undifferentiated story |
| A.3.3 | Temporal dynamics awareness | Time changes state, inertia/resistance matters |
| A.6 | Boundary discipline / Claim routing | Contract/API/SLA/protocol language mixes rules, gates, duties, evidence |
| A.6.B | Boundary basis | Need to establish what a boundary actually separates |
| A.6.C | Claim Register | Need atomic claim routing across boundaries |
| A.6.P | Quality language overload | Boundary text hides overloaded quality or action words |
| A.6.Q | Quality word unpacking | Quality words need explicit characteristics |
| A.6.A | Action word unpacking | Action words need explicit responsibility assignment |
| A.6.T | Temporal signature | Boundary claims carry time-dependent validity |
| A.6.RSIG | Relational signature | Need to identify what kind of description you're reading |
| A.6.3.CR | Claim Record | Need formal claim documentation |
| A.6.3.RT | Routing Table | Need to map claims to processing contexts |
| A.6.3.CSC | Cross-schema comparison | Need to compare claims across different schema frameworks |

### Transformer Quartet

| ID | Pattern | Use When |
|----|---------|----------|
| A.15 | Separating role/method/plan/work | These four categories are conflated |
| A.15.2 | Role assignment | Need to assign transformer roles to systems |
| A.15.3 | Method assignment | Need to assign methods to role-bearing systems |
| A.15.4 | Publication/use boundary | Publication or display is being treated as permission to act |
| A.16 | Language-state classification | Ideas are being presented as settled before they're ready |
| A.16.1 | Maturity level assignment | Need to classify how mature a claim or idea is |
| A.16.2 | Routing by maturity | Need to route claims based on their maturity level |

### Characteristic Spaces & Comparison

| ID | Pattern | Use When |
|----|---------|----------|
| A.17 | Characteristic declaration | Need to define what matters for comparison |
| A.18 | Scale definition | Need to define how characteristics are measured |
| A.19 | Admissible comparison | Need to compare alternatives honestly with explicit criteria |
| A.19:0 | Comparison frame | Need the container for comparison work |
| A.19.CN | Candidate set management | Need to manage which alternatives are in play |

## Part B: Trans-disciplinary Reasoning

Logic of composition and trust across contexts.

| ID | Pattern | Use When |
|----|---------|----------|
| B.3 | Engineering justification / evidence transport | Trust, evidence, or engineering justification is live |
| B.4.1 | Pre-abductive routing | Need to route problems to appropriate reasoning modes |
| B.5 | Cross-context reasoning | Moving reasoning across contexts without semantic collapse |
| B.5.1 | Bridge construction | Need explicit translation between contexts |
| B.5.2.0 | Language-state bridge | Partly-said ideas need cross-context transport |
| B.5.2.1 | Characteristic bridge | Characteristics need cross-context mapping |

## Part C: Kernel Extensions

Pluggable domain-specific calculi and characterization families.

### Search, Generation, Creativity

| ID | Pattern | Use When |
|----|---------|----------|
| C.2.2a | Preservation-and-support note | Have serious cue/concern too early for settled claim |
| C.2.LS | Language-state handling | Work is partly-said, needs maturity tracking |
| C.2.4-C.2.7 | LS endpoint patterns | Partly-said item reaches an endpoint (claim, requirement, etc.) |
| C.11 | Choose-now vs probe-more gate | Must decide between committing now and gathering more evidence |
| C.16 | Timing/freshness evaluation | Delay or staleness changes claim usability |
| C.17 | Creative search initiation | Need to search beyond known options |
| C.18 | Generator policy | Open-ended generation without premature convergence |
| C.19 | Explore/exploit policy | Must balance exploration vs exploitation |
| C.24 | Checkpoint-return planning | Need to plan callbacks or checkpoints |
| C.27 | Temporal claim adequacy | Timing, delay, or effort changes whether a claim is usable |
| C.28 | Causal-use repair | Correlation treated as justifying intervention |

## Part D: Multi-scale Ethics & Conflict

| ID | Pattern | Use When |
|----|---------|----------|
| D.5 | Counterfactual support | Need to reason about what would have happened |

## Part E: Constitution & Authoring

Governance of the framework itself.

| ID | Pattern | Use When |
|----|---------|----------|
| E.1 | Vision | Need to understand FPF's purpose |
| E.2 | Pillars | Need to understand FPF's non-negotiable foundations |
| E.8 | Pattern authoring | Need to write or review FPF patterns |
| E.9 | DRR (Decision Rationale Record) | Normative change or durable canon rationale must be published |
| E.17 | Publication / display gate | Publication, screenshot, dashboard, or display is being treated as permission to act |
| E.17.EFP | Explanation-from-publication | Need explanation derived from a published artifact |
| E.17.ID.CR | Identity claim record | Need to track what an output is about |
| E.17.AUD.LHR | Audit log for human readers | Need audit trail for human readers |
| E.17.AUD.OOTD | Object-of-thought display | Need to render object-of-thought for audit |
| E.19 | Review gates | Need to review patterns against FPF criteria |
| E.TGA | Transduction graph architecture | Need to map principles-to-work route |
| TEVB | TEVB reference | Companion to E.TGA for evidence routing |

## Part F: Unification Suite

Techniques for aligning vocabularies across disciplines.

| ID | Pattern | Use When |
|----|---------|----------|
| F.9 | Bridge discipline | Need a bridging discipline between contexts |
| F.11 | Method/work vocabulary alignment | Method and work vocabulary must be aligned across contexts |
| F.17 | UTS (Unified Term Sheet) | Vocabulary must be stabilized across contexts |
| F.18 | Name Cards | Need better names for ambiguous roles, entities, or artefacts |

## Part G: State-of-the-Art Patterns Kit

Tools for harvesting and building governed knowledge portfolios.

| ID | Pattern | Use When |
|----|---------|----------|
| G.0 | SoTA kit scaffolding | First deliverable is a reusable search/harvest portfolio |
| G.1 | Discipline scope declaration | Need to bound what a SoTA search covers |
| G.2 | TraditionCards | Need to capture competing schools of thought |
| G.3 | OperatorCards | Need to capture update rules and operators |
| G.4 | SoTA pack assembly | Need to assemble harvested knowledge into governed pack |
| G.5 | Selector/dispatcher patterns | Need to select appropriate options from portfolio |
| G.9 | Counterfactual reasoning | Need to reason about interventions and alternatives |

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
