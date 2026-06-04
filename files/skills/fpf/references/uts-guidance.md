# UTS (Unified Term Sheet)

Produce when terms mean different things in different contexts or vocabulary must be shared across teams/agents. Write one record per term entry to `assets/templates/vocabulary-log.jsonl`. Terms sharing the same `uts_id` form one term sheet.

**Schema:** `assets/schemas/vocabulary-log.schema.json`

## Example

*Term: "latency" — means different things across infrastructure and product contexts.*

| Field | Value |
|-------|-------|
| term_id | `term-latency-001` |
| uts_id | `uts-agent-stack-001` |
| term | latency |
| sense_cell.context | Infrastructure |
| sense_cell.meaning | Server response time (p95) from request dispatch to first byte |
| sense_cell.differentiators | Measured in milliseconds; affects user experience directly |
| risky_aliases | `[{alias: "lag", context_used: "engineering", risk: "confuses UI delay with server delay"}]` |
| bridge_notes | When "latency" crosses from infrastructure to product, clarify: infra latency = p95 response time, product latency = time from user request to value delivery |

Also add a second record for the same term in the Product context:

| Field | Value |
|-------|-------|
| term_id | `term-latency-001` (same term, different context) |
| sense_cell.context | Product |
| sense_cell.meaning | Time from feature request to user-visible value delivery |
| sense_cell.differentiators | Measured in weeks/months; affects planning and OKRs |

Linked to DRR `drr-2026-06-001` from `references/drr-guidance.md`.

## What Goes In

| Field | Description |
|-------|-------------|
| `term_id` | Unique term record identifier |
| `uts_id` | Parent UTS identifier — all terms with same uts_id form one sheet |
| `term` | The term being defined |
| `plain_name` / `tech_name` | Non-specialist and specialist names |
| `status` | proposed / stable / deprecated |
| `sense_cell` | Meaning in one bounded context (context + meaning + differentiators) |
| `risky_aliases` | Alternate names that risk conflation |
| `bridge_notes` | How to translate when crossing contexts |
| `links` | Cross-artifact references: decision_log_ids, evidence_log_ids |

## Per-Term Granularity

One JSONL line = one term in one bounded context. The same term across multiple contexts produces multiple lines sharing the same `term_id` but different `sense_cell.context` values. External tools can:
- Group by `uts_id` to reconstruct the full term sheet
- Compare `sense_cell.meaning` across timestamps for the same term to detect semantic drift

## When NOT to Use

- Vocabulary is already stable
- Only 1-2 terms are ambiguous (resolve inline)
- No cross-context communication happening

Flag inline instead: *"Note: 'latency' means different things here..."*
