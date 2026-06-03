# Domain Composition Model

How domain knowledge skills compose with FPF.

## Philosophy

FPF handles *how* to think. Domain knowledge skills handle *what* matters. The two compose by overlay — domain skills never embed FPF vocabulary.

A domain skill must **not**:
- Use FPF vocabulary (bounded context, characteristic space, DRR, UTS)
- Replicate FPF reasoning patterns
- Gate itself on complexity assessment

A domain skill **should**:
- Declare what contexts exist, what matters, what outputs are needed
- Use plain domain language
- Assume FPF is already loaded underneath

## Composition Contract

When both are loaded:

```
Domain skill declares → FPF reasons
─────────────────────────────────────
bounded_contexts  → Partition into these
characteristics   → Evaluate against these
decision_criteria → Build comparison frame
output_forms      → Produce these views
vocabulary        → Map to FPF concepts
```

FPF never overrides domain knowledge. Domain skill never duplicates reasoning patterns.

## Domain Shapes File

A domain skill **ships a `domain-shapes.json` file** at its root. Strict requirement — FPF looks for this exact filename. If absent, FPF treats the skill as non-domain and skips it.

**Schema:** `assets/schemas/domain-skill.schema.json`

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `domain` | Yes | Domain name |
| `contexts` | Yes | ≥1 bounded context, each with name and description |
| `characteristics` | No | Evaluation dimensions with scale and indicator |
| `criteria` | No | Primary goal, constraints, trade-off rules |
| `output_forms` | No | Per-audience output definitions (form, audience, content) |
| `vocabulary` | No | Domain term → FPF concept mapping (flat key-value map) |

### Resolution Order

FPF resolves domain shapes in this order:

1. **`domain-shapes.json` present + valid** → use validated shapes directly
2. **`domain-shapes.json` present + invalid** → log warning, fall back to heuristic detection
3. **`domain-shapes.json` absent** → skip — skill is not a domain skill

FPF also applies heuristic detection (section headers, vocabulary lists) to supplement anything the file doesn't cover. A file with only `domain` and `contexts` is valid — characteristics, criteria, and output forms can be inferred from conversation.

## Agent Detection

When loaded alongside a domain skill, detect shapes automatically:
1. Structured lists labeled contexts, characteristics, criteria, or output forms
2. Domain-specific vocabulary sections
3. Implicit bounded contexts from section headers

Map detected shapes into FPF reasoning silently. No explicit fpf_overlay declaration required.

## Example: Customer Support Domain Skill

A customer support domain skill declares:

```
## Domain

### Contexts
- Customer: who they are, history, intent
- Product: capability, limitations, roadmap
- Policy: terms, compliance, exceptions
- Escalation: tiers, authority, SLA

### What Matters
- Resolution time: minutes to days, measured by clock
- Customer effort: touches × complexity, measured by interaction count
- Compliance risk: regulatory exposure, measured by breach probability
- Satisfaction: CSAT score, measured by survey

### Trade-off Rules
- Resolution time can be sacrificed for compliance
- Customer effort can be sacrificed for resolution time
- Satisfaction is never sacrificed for speed alone

### Output Forms
- Case summary: for support team (customer + product context)
- Escalation note: for engineering (evidence + gap)
- Policy gap report: for legal/product (pattern + risk)
```

FPF, seeing these shapes:
- Partitions into customer/product/policy/escalation contexts
- Builds characteristic space from the four dimensions
- Applies trade-off rules when comparing alternatives
- Produces aligned outputs per audience

The domain skill author writes domain shapes. FPF handles the reasoning. Neither needs the other's vocabulary.

## Without a Domain Shapes File

A skill that does NOT ship `domain-shapes.json` is skipped. FPF does not try to infer domain shapes from it. This is intentional — the skill may be a generic utility, a reasoning enhancer, or unrelated to domain modelling.

Only skills with `domain-shapes.json` at their root are treated as domain skills. Others pass through untouched.
