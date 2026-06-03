# UTS (Unified Term Sheet)

Produce when terms mean different things in different contexts or vocabulary must be shared across teams/agents. Write one record per term entry to `assets/templates/vocabulary-log.jsonl`. Terms sharing the same `uts_id` form one term sheet.

**Schema:** `assets/schemas/vocabulary-log.schema.json`

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
