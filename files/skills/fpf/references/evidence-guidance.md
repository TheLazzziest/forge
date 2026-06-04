# Evidence Register

Produce when evidence maturity is uneven across claims or decision quality depends on knowing what's unverified. Write one record per claim or gap to `assets/templates/evidence-log.jsonl`.

**Schema:** `assets/schemas/evidence-log.schema.json`

## Example

*Claims from the agent stack decision (see `references/drr-guidance.md` for the decision context).*

**Claim (verified):**
```
record_id: evidence-claim-001
record_type: claim
claim.claim_text: "LLM API provider supports fine-tuning for domain-specific tasks"
claim.maturity: verified
claim.source: "Published API docs — confirmed via integration test"
claim.context: Infrastructure
claim.verified_date: "2026-06-01"
```

**Claim (assumed):**
```
record_id: evidence-claim-002
record_type: claim
claim.claim_text: "Building orchestration in-house gives more controllability than buying"
claim.maturity: assumed
claim.why_assumed: "Based on prior team experience with similar stacks — no formal comparison study"
claim.importance: high
claim.verification_path: "Run a spike comparing control surfaces of buy vs build"
```

**Gap (linked to assumed claim):**
```
record_id: evidence-gap-001
record_type: gap
gap.gap_description: "No formal comparison of control surfaces between commercial agent stacks and custom orchestration"
gap.priority: high
gap.related_claim_ids: ["evidence-claim-002"]
gap.impact_if_wrong: "Chosen hybrid approach may not deliver the controllability expected"
gap.cost_to_close: "2-week spike"
gap.decision: defer
```

Linked to DRR `drr-2026-06-001` from `references/drr-guidance.md`.

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
