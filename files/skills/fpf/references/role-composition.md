# Role Composition Model

How domain roles compose with FPF.

## Philosophy

FPF handles *how* to think. Domain roles handle *what* matters. The two compose by overlay — roles never embed FPF vocabulary.

A role skill must **not**:
- Use FPF vocabulary (bounded context, characteristic space, DRR, UTS)
- Replicate FPF reasoning patterns
- Gate itself on complexity assessment

A role skill **should**:
- Declare what contexts exist, what matters, what outputs are needed
- Use plain domain language
- Assume FPF is already loaded underneath

## Composition Contract

When both are loaded:

```
Role declares → FPF reasons
─────────────────────────────
bounded_contexts  → Partition into these
characteristics   → Evaluate against these
decision_criteria → Build comparison frame
output_forms      → Produce these views
vocabulary        → Map to FPF concepts
```

FPF never overrides domain knowledge. Role never duplicates reasoning patterns.

## Domain Overlay Template

A role declares domain shapes — not a formal schema, just a pattern:

```
## Domain Shapes

### Bounded Contexts
- [context_1]: [what it means here]
- [context_2]: [what it means here]

### Characteristics
- [characteristic_1]: [scale: min...max, indicator: how measured]
- [characteristic_2]: [scale: min...max, indicator: how measured]

### Decision Criteria
- Primary: [what matters most]
- Constraints: [what must hold]
- Trade-offs: [what can be sacrificed]

### Output Forms
- [form_1]: [audience: X, content: Y]
- [form_2]: [audience: Y, content: Z]

### Vocabulary Map (optional)
- [domain_term] → FPF [characteristic / claim / context]
```

## Agent Detection

When loaded alongside a domain role, detect shapes automatically:
1. Structured lists labeled contexts, characteristics, criteria, or output forms
2. Domain-specific vocabulary sections
3. Implicit bounded contexts from section headers

Map detected shapes into FPF reasoning silently. No explicit fpf_overlay declaration required.

## Example: Customer Support

A customer support role declares:

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

The role author writes domain shapes. FPF handles the reasoning. Neither needs the other's vocabulary.

## Without an Overlay

A role that declares nothing is still compatible. FPF falls back to generic partitioning:
- Detect contexts from problem structure
- Infer characteristics from user's stated concerns
- Produce standard output forms

The overlay is optional — it tightens FPF to the domain, but FPF works generically without it.
