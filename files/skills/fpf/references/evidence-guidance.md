# Evidence Register

Produce when evidence maturity is uneven across claims or decision quality depends on knowing what's unverified. Write one record per claim or gap to `assets/templates/evidence-log.jsonl`.

**Schema:** `assets/schemas/evidence-log.schema.json`

## What Goes In

| Field | Description |
|-------|-------------|
| `record_id` | Unique record identifier |
| `record_type` | `claim` (statement about truth) or `gap` (missing evidence) |
| `claim.*` | Claim text, maturity tag (verified/plausible/assumed/unknown), source, context, verification details |
| `claim.previous_maturity` | If this record represents a maturity transition, the previous tag |
| `gap.*` | Gap description, priority, related claim IDs, impact if wrong, cost to close, fill/accept/defer, closed status |
| `c11_context` | Choose-now-vs-probe gate: drr_id, gate_decision (commit/probe/defer), rationale |
| `links` | Cross-artifact references: drr_id, decision_log_ids, vocabulary_log_ids |

## Maturity Transitions

When a claim's maturity tag changes (e.g., assumed → verified), write a new evidence-log record with the new maturity and `previous_maturity` set to the old tag. External tools reconstruct the evidence chain by ordering records by timestamp.

## Evidence Tag Definitions (Reference)

| Tag | Meaning | Action |
|-----|---------|--------|
| `verified` | Tested against real-world oracle, result known | Use directly in decision |
| `plausible` | Reasoning supports it, not tested | Working hypothesis; plan verification |
| `assumed` | Taken as given without verification | Flag as risk; verify or accept |
| `unknown` | No basis for assessment | Cannot use; probe or defer |

## When NOT to Use

- All claims are verified
- Decision is small and reversible
- Evidence quality is obvious and undisputed

Inline instead: *"Key assumption: X. If wrong, consequence Y."*
