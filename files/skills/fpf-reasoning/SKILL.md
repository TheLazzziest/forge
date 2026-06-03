# FPF Reasoning

## Description
First Principles Framework — structured reasoning for complex engineering, research, and mixed human/AI work. Use when problems require bounded context analysis, role clarity, evidence discipline, or multi-stakeholder alignment.

## When to Use
- Complex, coordinator-heavy problems
- Multi-agent workflows with unclear boundaries
- High-stakes decisions needing evidence grounding
- Vocabulary/boundary disputes between teams

## How to Use
See CONCEPTS.md for full concept reference. Apply via entry-family router below.

Workflow: DETECT → MATCH → STABILIZE → APPLY → REVIEW

**DETECT**: Match symptoms (vagueness, role conflict, temporal confusion) to family.
**MATCH**: Select FPF pattern IDs (see CONCEPTS.md).
**STABILIZE**: Frame problem. Define contexts, roles, evidence boundaries.
**APPLY**: Execute reasoning: evidence graphs, CSLC, causal models. Use prompts.
**REVIEW**: Verify constraints. Check lexical debt, role confusion, missing evidence.

## Entry Family Router

### 1. Alignment / Role Confusion — A.1.1, A.15, B.5.1
Agents disagree on who decides. Signals: contradictory directives, scope creep. → Bounded contexts (A.1.1), role taxonomy (A.15), abduction loop (B.5.1).

### 2. Vague Cue / Idea — C.2.2a, A.16, B.4.1
Fuzzy request, unclear criteria. Signals: "I'll know it when I see it". → Lang-state transduction (A.16), vagueness contraction (C.2.2a), context stabilization (B.4.1).

### 3. Boundary / Contract / API — A.6, A.6.B, A.6.C
Interface disputes, integration friction. Signals: "works on my machine". → Signature stack (A.6), boundary negotiation (A.6.B), contract-first design (A.6.C).

### 4. Compare / Choose Options — A.17-A.19, C.11, G.0
Decision paralysis, trade-off confusion. Signals: "which is better?" → CSLC framework (A.17), comparison & scoring (A.18), selection normalization (A.19), tradition cards (G.0).

### 5. Generate / Search / Portfolio — A.0, C.18-C.19, G.0-G.5
Exploration mode, need candidates. Signals: brainstorming. → Problem framing (A.0), NQD/OEE (C.18-C.19), tradition & operator cards (G.0-G.5).

### 6. Publish / Explain / Render — E.17, A.15.4, A.6.3.*
Document decision, explain to stakeholders. Signals: "why did we choose X?" → Multi-view publish (E.17), role-specific explanation (A.15.4), signature-bound output (A.6.3.*).

### 7. Temporal Claim — C.27, C.16, A.3.3
Sequence confusion, scheduling conflicts. Signals: "we can't do that until...". → Temporal ordering (C.27), sequence mapping (C.16), system-in-role temporal framing (A.3.3).

### 8. Causal / Intervention — C.28, A.10, B.3, D.5
Cause disagreement, blame dynamics. Signals: "if only we had...". → Causal repair (C.28), evidence graphs (A.10), F-G-R scoring (B.3), intervention design (D.5).

## Core Prompts

### Prompt: Project Structuring — Bounded Contexts
```
You are using FPF reasoning. Decompose the problem into bounded contexts (A.1.1). For each: name, scope, primary role (A.15), interfaces (A.6). Output as table. Identify overlaps/gaps.
```

### Prompt: Decision Analysis — Evidence Graphs + Gamma
```
You are using FPF reasoning. Build evidence graph (A.10) with claims + edges. Score nodes via F-G-R (B.3). Aggregate via gamma algebra (B.1). Output ranked alternatives with confidence.
```

### Prompt: Multi-Stakeholder Alignment — Role Taxonomy
```
You are using FPF reasoning. List all stakeholders. Per role (A.15): stance, authority, decision rights (A.2). Use strict distinction (A.7) to separate facts from opinions. Output table with tensions flagged.
```

### Prompt: Evidence Audit — F-G-R Scoring
```
You are using FPF reasoning. For each claim assign F (falsifiability 0-1), G (grounding 0-1), R (reproducibility 0-1). Composite = F*G*R. Flag < 0.5. Output ranked table.
```

### Prompt: Vocabulary Reconciliation — Lexical Debt
```
You are using FPF reasoning. Detect lexical debt (K) in text: terms with ambiguous or conflicting definitions per party. For each: term, parties, definitions, severity (1-5). Propose unified term sheet (F.17).
```
