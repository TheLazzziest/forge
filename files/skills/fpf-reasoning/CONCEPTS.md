# FPF Concepts Reference

## Kernel Architecture
### Bounded Contexts (A.1.1)
Semantic boundary where terms, rules, types have fixed meaning. No cross-boundary leakage — use translators. Enables parallel reasoning without ambiguity (A.1.1).

### Holons (A.1)
Entity both whole and part — claims compose as holons in evidence graphs, evidence feeds aggregation. Each obeys bounded context boundary rules (A.1).

### Role Taxonomy (A.2)
Each artifact plays one role per level: Claimant, Critic, Evaluator, Arbiter, Observer. Role gates valid operations — no mixing without explicit protocol (A.2).

### Strict Distinction (A.7)
Never conflate entity↔description, process↔result, type↔instance. Category errors cascade into unreliable reasoning (A.7).

## Transformer Quartet
### System-in-Role (A.3)
Entity acting within a bounded context. One system holds multiple roles across contexts. Assignment explicit and revocable (A.3).

### MethodDescription (A.3)
Declarative contract: preconditions, postconditions, invariants. Constrains what Methods may claim (A.3).

### Method (A.3)
Concrete procedure implementing a MethodDescription. Produces Work. Bound to exactly one description (A.3).

### Work (A.3)
Observable output from executing a Method. Only layer measurable against claims (A.3).

## Boundary Discipline
### Signature Stack (A.6)
Each reasoning step carries context, role, claims, boundary crossings. Enables replay and attribution (A.6).

### L/A/D/E Claims (A.6)
Four claim classes: Laws (invariants), Admissibility (entry conditions), Deontics (permissions), Effects (outcomes). Every claim resolves to one class (A.6).

### Relational Precision Restore (A.6.P)
Repairs degraded cross-boundary references via triple-check: source, target, mapping. Run before critical inferences (A.6.P).

## Characteristic Spaces
### CSLC Framework (A.17)
Four-axis system: Characteristic (what), Scale (measurement), Level (position), Coordinate (value). Eliminates comparison ambiguity (A.17).

### Comparison & Scoring (A.18)
CSLC-tagged entities compare via coordinate difference on shared scales. Relative results, bound by scale granularity (A.18).

### Selection & Normalization (A.19)
Normalize incommensurate scales to unit intervals. Selection criteria declared before comparison (A.19).

## Evidence & Trust
### Evidence Graphs (A.10)
DAG: claim nodes, evidential edges (supports, refutes, qualifies). Must be acyclic. Structure determines reachable conclusions (A.10).

### F-G-R Scoring (B.3)
Three-dimension trust: Formality, Grounding, Reliability (each 0.0–1.0). Two nodes with same gamma aggregate may differ per axis (B.3).

### Gamma Aggregation (B.1)
Folds sub-graph evidence into parent trust. Accounts for corroboration, conflict, independence. Not simple averaging (B.1).

## Reasoning Cycles
### Abduction Loop (B.5)
Inference-to-best-explanation: anomaly → hypothesize → test → update. Terminates when stable within threshold or budget exhausted (B.5).

### Lang-State Transduction (A.16)
Four-phase pipeline: cue → sketch → spec → retire. Transforms linguistic patterns into structured state. Steps back on inconsistency (A.16).

### Causal Repair (C.28)
On contradiction, locate broken causal link. Repair: strengthen precondition, split context, promote/demote rule level. Fix model, not symptoms (C.28).

## Aggregation
### Gamma Algebra (B.1)
Gamma properties: IDEM (identity), COMM (commutative), LOC (local), MONO (monotone), WLNK (weak-link bounded). Guarantees consistent trust propagation (B.1).

## Publication
### Decision Rationale Rec (E.9)
Structured record: context, alternatives, criteria, evidence, conclusion, dissents. Enables replay against original evidence (E.9).

### Multi-View Publish (E.17)
Same decision per stakeholder: executive (summary), technical (evidence+tradeoffs), audit (full DRR+signatures). Views never independently editable (E.17).

### Unified Term Sheet (F.17)
Cross-context term registry: term, local definitions, mapping, conflict resolution. Resolves terminological ambiguity (F.17).

## SoTA Discipline Kit
### TraditionCards (G)
Proven reasoning patterns: problem class, solution, preconditions, failure modes. New cards only when existing insufficient (G).

### OperatorCards (G.1)
Executable FPF ops: split context, merge evidence, apply gamma, transduce. Compose sequentially (G.1).

### NQD / OEE (C.18)
Explore/Exploit gating. NQD (novelty-quality-diversity) scores candidates. OEE (opportunity-estimated-effort) scores exploitation. Switch at threshold (C.18).

## Glossary & Indexes
### Key Terms (H)
FPF glossary: canonical definitions + context elaborations. Undefined = lexical debt (H).

### Pattern Index (J)
Searchable by ID, name, tag with cross-refs. Check before inventing new patterns (J).

### Lexical Debt (K)
Cost of undefined/overloaded/drifting terms — compounds like tech debt. Pay down by promoting to Key Terms (K).
