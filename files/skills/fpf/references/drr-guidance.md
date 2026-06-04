# DRR (Decision Rationale Record)

Produce a DRR when a normative choice, irreversible commitment, or rationale-for-the-record is needed. Write one record per decision to `assets/templates/decision-log.jsonl`.

**Schema:** `assets/schemas/decision-log.schema.json`

## Example

*Decision: "Should our platform team buy, fine-tune, or build an agent stack?"*

| Field | Value |
|-------|-------|
| drr_id | `drr-2026-06-001` |
| decision_title | Agent stack acquisition strategy |
| decision | Adopt a hybrid approach: buy base LLM API, fine-tune for domain-specific tasks, build orchestration layer in-house |
| contexts | `[{name: "Product", meaning: "features and roadmap"}, {name: "Infrastructure", meaning: "hosting, latency, scaling"}, {name: "Safety", meaning: "alignment, guardrails, compliance"}]` |
| alternatives | `["buy-full-stack", "buy-plus-fine-tune", "build-from-scratch", "hybrid-buy-fine-tune-build"]` |
| selected_alternative | hybrid-buy-fine-tune-build |
| criteria | `[{characteristic: "time-to-value", weight: "high", rating_selected: "medium"}, {characteristic: "controllability", weight: "high", rating_selected: "high"}, {characteristic: "cost", weight: "medium", rating_selected: "medium"}]` |
| trade_offs | `[{sacrifice: "operational complexity", rationale: "hybrid increases ops surface but improves controllability"}]` |
| c11_assessment | `{decision: "commit", rationale: "Three alternatives with distinct trade-offs evaluated. Key assumptions tagged for verification."}` |

See `references/evidence-guidance.md` for supporting claims from the same decision.

## What Goes In

| Field | Description |
|-------|-------------|
| `drr_id` | Unique identifier — links to evidence and vocabulary records |
| `decision_title` | One-line title |
| `decision` | One sentence: what was decided |
| `contexts` | ≥1 bounded context (name + meaning) that this decision spans |
| `problem_frame` | What problem was live, what was being mixed, why now |
| `alternatives` | ≥2 alternatives considered; FPF default is ≥3 |
| `selected_alternative` | Which one was chosen |
| `criteria` | Characteristics with weights and ratings |
| `trade_offs` | What was sacrificed and why it was acceptable |
| `evidence` | Counts of claims, IDs of assumed claims, accepted gaps |
| `c11_assessment` | commit / probe / defer with rationale |
| `temporal` | Freshness, inertia, next review date |
| `responsibilities` | Role, responsibility, approval required |
| `aligned_outputs` | Per-audience messages from same reasoning body |
| `links` | Cross-artifact references: superseded_by, evidence_log_ids, vocabulary_log_ids |

## When NOT to Use

- Decision is small and reversible at low cost
- No durable record needed
- Only one audience will ever reference this
- Decision is not normative

Inline the rationale in conversation instead.
