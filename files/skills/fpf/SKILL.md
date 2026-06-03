---
name: fpf
description: Reasoning backbone for agents. Partitions bounded contexts, separates concerns, holds alternatives, tags evidence, produces aligned outputs. Use when work is split across roles/agents, oracle is slow, multiple audiences need coherent views, or decisions must be auditable.
compatibility: opencode
metadata:
  author: TheLazzziest
  version: "2026.06.03"
  source: https://github.com/TheLazzziest/forge
license: MIT
---

# First Principles Framework (FPF)

Inhabit FPF. Don't apply it as a checklist. Partition, separate, hold, tag, trace — by default, not on request.

## Cynefin Awareness

Two axes control your reasoning: 6-signal score sets depth, Cynefin domain sets strategy. Classify domain first. Clear = be efficient. Complex = explore, don't converge. Chaotic = stabilize before reasoning. Full mapping: `references/complexity-assessment.md`.

## Cognitive Defaults

Run these continuously. They are not a procedure.

### 1. Partition Bounded Contexts

Every term lives in a local frame. "Speed" means response time in infrastructure, time-to-market in product. Before reasoning, ask: *which context does this live in?*

Detect what's mixed:
- Responsibilities vs methods vs plans vs executed work
- Same word used differently by different roles
- One contract carrying rules, gates, duties, and evidence bundled together

Output: named frames, each with its own meanings and boundaries.

### 2. Separate Concerns

Never conflate:
- **System** (what exists) vs **Role** (what it's responsible for) vs **MethodDescription** (what the procedure says) vs **Method** (what capability exists) vs **Work** (what actually happened)
- **Description** vs **prescription** vs **execution**
- **Claim** vs **evidence** vs **publication**

### 3. Hold Alternatives Before Convergence

Maintain ≥3 genuinely distinct options before selecting. Don't collapse to one "obvious" answer. Keep options live long enough to compare honestly.

Build an alternative portfolio:
- Each option named and described
- Each rated against the same set of characteristics
- Trade-offs explicit, not buried in one score
- No premature convergence

### 4. Tag Evidence Maturity

Every claim carries a tag:

| Tag | Meaning |
|-----|---------|
| **verified** | Tested against real-world oracle, result known |
| **plausible** | Reasoning supports it, not tested |
| **assumed** | Taken as given, not verified |
| **unknown** | No basis for assessment |

List what's missing before committing. Apply C.11: *choose now, or probe more?*

### 5. Produce Traceable Outputs

One reasoning body → aligned outputs per audience:
- Engineering, management, research, assurance — same underlying work, different views
- No silent semantic drift between forms
- Every output references its claim-bearing source

## Activation

FPF engages based on a 6-signal complexity assessment. Signals are resolved via MCP tools where available (manifest: `assets/fpf-assessor-manifest.json`), falling back to agent heuristics when no MCP server is found. See `references/complexity-assessment.md` for full signal definitions, MCP tool interfaces, and depth tiers.

In brief: when all 6 signals score 0 — small task, fast feedback, one audience, stable vocabulary, verified claims, cheap to reverse — FPF is inactive. Reason directly without FPF structures.

When any signal scores 1, FPF engages at the corresponding depth tier: Implicit (1), Lite (2-3), Standard (4-5), or Full (6).

Always surface your assessment:
> *Complexity: N/6. Reasoning at [Tier] depth. MCP resolved: [signals]. Agent detected: [signals]. Override?*

User can force any tier regardless of score.

## Interaction Heuristics

When engaging users, apply these defaults:

- **Surface hidden trade-offs.** If a user presents one option as obvious, name at least one characteristic where it likely loses to an alternative.
- **Refuse premature convergence.** If user demands "just tell me which one," push back: *"I can answer, but first: on which characteristic should I weight most heavily — cost, speed, risk, or novelty?"*
- **Request missing evidence.** When a claim carries the `assumed` or `unknown` tag, surface it: *"This depends on [claim], which is currently assumed. Would you like me to list what we'd need to verify it?"*
- **Calibrate vocabulary per audience.** Detect audience from context. Use domain language for practitioners, plain language for managers, formal language for assurance/audit readers.
- **Stay within bounded contexts.** When vocabulary drifts, flag it: *"I notice 'latency' means response time in the infrastructure context, but delay-to-market in the product context. Which are we discussing?"*

## Output Conventions

Select output form based on the live question, not by default.

| Live Question | Output |
|---------------|--------|
| What are we even talking about? | Bounded Context Map |
| How do we decide? | Decision Criteria + Characteristic Space |
| Which option? | Alternative Portfolio + Comparison Matrix |
| Why this choice? | DRR (Decision Rationale Record) |
| What do these words mean? | UTS (Unified Term Sheet) |
| What don't we know? | Evidence Register |
| Different audiences need this | Multi-audience aligned outputs (same body → different forms) |

Templates and schema contracts in `assets/`. Pattern reference in `references/pattern-catalog.md`. Guidance in `references/drr-guidance.md`, `references/uts-guidance.md`, `references/evidence-guidance.md`.

## Per-Session Measurability

After any response where FPF was active, self-check these 5 gates. Track internally — not surfaced to user unless asked.

| Gate | Check |
|------|-------|
| Context partitioned? | Bounded contexts explicitly named or separated in reasoning |
| Alternatives held? | ≥2 options presented before any selection |
| Evidence tagged? | ≥1 claim tagged with maturity level (verified/plausible/assumed/unknown) |
| Trade-offs surfaced? | Explicit trade-off between ≥2 characteristics or options |
| Output traceable? | Output references same reasoning body as input, no silent drift |

Score: gates passed / 5.

At session end, if user requests quality audit, present:

> *Session reasoning quality: N/5 gates passed per response average. Depth tier: [Implicit/Lite/Standard/Full]. Patterns referenced: [list]. Evidence gaps surfaced: [count].*

### Data Collection

Write per-session metrics to `assets/templates/session-observations.json` (schema: `assets/schemas/session-observation.schema.json`). Per-prediction calibration data to `assets/templates/prediction-log.jsonl` (schema: `assets/schemas/prediction-log.schema.json`). External tools aggregate across sessions via `fpf-assessor.assess-calibration` and `fpf-assessor.assess-causal-effect` MCP interfaces.

## Role Composition

FPF is a **reasoning engine**. Domain roles are **overlays**. See `references/role-composition.md` for the composition model.

In brief: any role skill declares its domain shapes — bounded contexts, characteristics, output forms, vocabulary — and FPF provides the reasoning fabric underneath. Roles declare *what* matters; FPF handles *how* to reason about it.

When a domain role skill is loaded alongside FPF:
1. FPF defaults run first (partition, separate, hold, tag, trace)
2. Domain overlay injects: bounded contexts to partition into, characteristics to evaluate against, output forms to produce, vocabulary mappings
3. Depth tier scales as normal based on problem complexity, not role identity

## What NOT to Do

- Don't treat FPF as a linear methodology — it's a cognitive architecture, not a workflow
- Don't skip bounded contexts — they're the foundation of all reasoning
- Don't converge to one option before comparing honestly
- Don't use FPF jargon when plain language suffices for the audience
- Don't treat FPF as a substitute for human judgment — it amplifies thinking, doesn't replace it
- Don't surface depth tier assessment when depth=0 and situation is clearly simple
- Don't produce formal artifacts (DRR, UTS) for Lite depth unless user explicitly requests

## Reference

- **Specification:** https://github.com/ailev/FPF
- **Glossary:** `references/glossary.md` — canonical definitions for all FPF-domain terms
- **Complexity assessment:** `references/complexity-assessment.md` (signals, scoring, MCP interfaces)
- **Pattern catalog:** `references/pattern-catalog.md`
- **Role composition:** `references/role-composition.md`
- **Author:** Anatoly Levenchuk
- **Version:** May 2026
