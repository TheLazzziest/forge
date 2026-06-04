# Complexity Assessment Model

Defines how FPF complexity is measured, scored, and resolved at runtime. MCP tool interfaces enable automated signal detection; agent fallback handles contextual judgment when tooling is absent.

## Signal Definitions

Six independent signals. Each scores 0 (low complexity) or 1 (high complexity). Score sum (0-6) determines depth tier.

### 1. Oracle Latency

How fast and cheap is real-world feedback on decisions?

| Score | Condition |
|-------|-----------|
| 0 | Fast, cheap feedback: CI runs tests automatically, monitoring alerts within minutes, real-world oracle responds quickly |
| 1 | Slow, expensive, noisy, or risky feedback: oracle is delayed, gated, costly to consult, or unreliable |

### 2. Evidence Maturity

Are claims verified or assumed?

| Score | Condition |
|-------|-----------|
| 0 | Claims are verified or testable: test coverage high, types strict, validation schemas present, claims have known verification paths |
| 1 | Claims are assumed or untested: low coverage, no validation, reasoning rests on unverified assumptions |

### 3. Vocabulary Risk

Is language stable across parties?

| Score | Condition |
|-------|-----------|
| 0 | Vocabulary stable: terms mean the same thing across all contexts, glossary present, naming consistent |
| 1 | Vocabulary breaking down: same word means different things in different contexts, no shared glossary, semantic drift live |

### 4. Stake Breadth

How many roles, specialists, or agents are involved?

| Score | Condition |
|-------|-----------|
| 0 | Single person or single context: work is self-contained, no coordination across roles |
| 1 | Multiple specialists, teams, or agents: work split across roles, coordination required |

### 5. Audience Divergence

How many different audiences need aligned outputs from the same underlying work?

| Score | Condition |
|-------|-----------|
| 0 | One audience: single reader type, single output form |
| 1 | Multiple audiences: engineering, management, research, assurance — each needs different views of same reasoning |

### 6. Reversibility

How costly is a wrong decision?

| Score | Condition |
|-------|-----------|
| 0 | Cheap to reverse: decision can be unwound at low cost, no irreversible resource allocation |
| 1 | Irreversible or high-cost: decision commits resources that cannot be recovered, or reversal is expensive |

## Scoring Model

Score = sum of all 6 signals. Range: 0-6.

| Score | Tier | Behavior | Output Form |
|-------|------|----------|-------------|
| 0 | **Inactive** | FPF structures not engaged. Reason directly. | Normal conversational response |
| 1 | **Implicit** | Cognitive defaults run silently in reasoning. No formal structures surfaced. | Normal response with light structuring |
| 2-3 | **Lite** | Explicit contexts named, alternatives listed, informal criteria mentioned. Evidence gaps flagged. | Bullet-structured response |
| 4-5 | **Standard** | Full bounded context map, decision criteria with scales, alternative portfolio with comparison matrix, evidence tags on key claims. | Structured report with numbered sections, traceable reasoning chain |
| 6 | **Full** | Formal everything: context map, characteristic space, DRR, UTS, evidence register, multi-audience aligned outputs. | Multiple artifact documents with formal publication forms |

## Cynefin Domain Classification (Complementary)

FPF's 6-signal model determines **how much** depth (Implicit → Full). Cynefin determines **which** response strategy and which FPF pattern families to engage. The two operate on orthogonal axes: scoring measures coordination/evidence **risk**, Cynefin classifies cause-effect **relationship structure**.

| Cynefin Domain | Description | Response Strategy | FPF Patterns Active |
|----------------|-------------|-------------------|---------------------|
| **Clear** | Known knowns — cause/effect obvious, constrained, best practice | Sense → Categorize → Respond | Defaults silently (Implicit/Lite). Context partition + evidence tagging. Don't over-analyze. |
| **Complicated** | Known unknowns — cause/effect discoverable by analysis, expertise needed | Sense → Analyze → Respond | Partition contexts (A.6), separate roles/methods/plans/work (A.15). Standard tier, characteristic spaces (A.17-A.19). |
| **Complex** | Unknown unknowns — cause/effect only in retrospect, emergent practice | Probe → Sense → Respond | Generator/SoTA patterns (C.18, C.19, G.0-G.5). Hold alternatives wide. C.11 gate critical. Full tier, exploration policy, safe-to-fail experiments. |
| **Chaotic** | No cause/effect discernible — crisis, immediate action | Act → Sense → Respond | Stabilize first. Then classify into complex or ordered. FPF activates post-stabilization: partition what emerged, tag evidence, aligned outputs. |
| **Confusion** | Unclear which domain — multiple perspectives, cacophony | Break into parts, assign each to appropriate domain | Primary entry: partition into bounded contexts (A.1.1, A.15). Assign parts to Cynefin domains. Treat as partly-said (C.2.LS) until clarity. |

### Decision Flow

```
Problem → Cynefin classification → 6-signal scoring → FPF defaults → tailored response
```

Classify domain first, then score signals. A Chaotic domain overrides scoring tempo — act before full assessment.

### Agent Stance by Domain

| Domain | Agent Stance |
|--------|-------------|
| **Clear** | Efficient: apply defaults lightly, produce, move on |
| **Complicated** | Analyst: gather expertise, define characteristics, compare systematically |
| **Complex** | Explorer: probe, hold alternatives, safe-to-fail experiments, resist convergence |
| **Chaotic** | Stabilizer: act first to establish order, then categorize and reason |
| **Confusion** | Partitioner: break down, assign parts, then reason per-domain |

### Cynefin-to-Score Correlation

Typical correlations — not prescriptive. Always compute 6-signal score independently.

| Domain | Typical Score Range | Typical Tier |
|--------|--------------------|----------------|
| Clear | 0-1 | Inactive/Implicit |
| Complicated | 2-4 | Lite/Standard |
| Complex | 4-6 | Standard/Full |
| Chaotic | 3-5 (post-stabilization) | Standard |
| Confusion | 2-6 | Lite to Full |

## MCP Tool Interfaces

All tools belong to the `fpf-assessor` MCP server namespace. Full machine-readable definitions (input schemas, output schemas, $ref links, descriptions) are in `assets/fpf-assessor-manifest.json` — a static MCP `tools/list`-compatible manifest. This section provides narrative guidance only.

### Common Input Schema

All 6 complexity signal tools accept identical input:

```json
{ "project_root": "string (required)", "context": "string (optional)" }
```

### Common Output Schema

All 6 complexity signal tools return identical output:

```json
{ "score": 0|1, "confidence": 0.0-1.0, "rationale": "string", "probes": ["string"] }
```

### Signal Tool Probes

| Tool | Reliability | Probes |
|------|-------------|--------|
| `assess-oracle-latency` | HIGH | CI/CD config, test automation, monitoring (Prometheus, Sentry), staging envs, feature flags |
| `assess-evidence-maturity` | HIGH | Coverage reports (lcov, cobertura), type strictness, validation schemas (Zod, JSON Schema), lint severity, assertion density, contract tests |
| `assess-vocabulary-risk` | MEDIUM | Glossary files, term frequency variance, naming inconsistency, synonym clusters |
| `assess-stake-breadth` | LOW | CODEOWNERS, package boundaries, multi-team/repo topology. Advisory only. |
| `assess-audience-divergence` | LOW | Multi-level docs, multi-format outputs, audience personas. Advisory only. |
| `assess-reversibility` | LOW | Rollback mechanisms, IaC, feature flags, canary rollout, lock-in indicators. Advisory only. |

### Calibration & Causal Tools

| Tool | Reliability | Input | Output |
|------|-------------|-------|--------|
| `assess-calibration` | HIGH | Prediction log array (schema: `assets/schemas/prediction-log.schema.json`) | Brier score + decomposition (RELiablity, RESolution, UNCertainty) + BSS skill score |
| `assess-causal-effect` | MEDIUM | Session observations (schema: `assets/schemas/session-observation.schema.json`) + experiment config (schema: `assets/schemas/ab-experiment-config.schema.json`) | ATE ± CI + effect size + balance diagnostics |

Complete input/output schemas with all properties, constraints, and `$ref` links in `assets/fpf-assessor-manifest.json`.

### Measurement Pipelines

**Brier Score Calibration:**
```
Agent prediction → JSONL log → assess-calibration → Brier score + decomposition
```
Agent writes per-prediction records to `assets/templates/prediction-log.jsonl` (schema: `assets/schemas/prediction-log.schema.json`). Oracle resolves → agent fills `actual_outcome`. External tool computes BS, reliability, resolution, uncertainty, skill score (BSS).

**Causal Effect Estimation (Rubin Causal Model):**
```
Session observations + experiment config → assess-causal-effect → ATE ± CI
```
Agent writes per-session `assets/templates/session-observations.json` records. Experiment config in `assets/schemas/ab-experiment-config.schema.json`. External tool fits RCM estimators (difference-in-means, doubly robust, propensity score matching, IPW, regression adjustment).

**Implementation reference:** scikit-learn `brier_score_loss`, statsmodels/EconML for causal estimators. Requires n > 1000 for rare events (Wilks 2010). SMD < 0.1 on all covariates for unbiased ATE.

## Composite Assessment Protocol

### Resolution Sequence

For each of the 6 signals:

```
1. Search for MCP server matching "fpf-assessor" namespace
2. If found → call tool → use score
3. If not found → agent-fallback: detect score from context using signal definition
4. Track resolution method and confidence per signal
```

### Composite Scoreboard

Agent builds and surfaces this scoreboard before producing output. Surface to user at depth tier >= 2, or whenever user asks about complexity.

```markdown
| Signal | Score | Method | Confidence |
|--------|-------|--------|------------|
| oracle-latency | 1 | MCP | 0.95 |
| evidence-maturity | 1 | Agent | 0.60 |
| vocabulary-risk | 0 | MCP | 0.85 |
| stake-breadth | 1 | Agent | 0.75 |
| audience-divergence | 0 | Agent | 0.70 |
| reversibility | 1 | Agent | 0.55 |
| **TOTAL** | **4** | — | **0.73 avg** |
```

### User Surface Message

> *Complexity: 4/6 (Standard depth). Confidence: 0.73 avg.
> MCP resolved: oracle-latency, vocabulary-risk.
> Agent detected: evidence-maturity, stake-breadth, audience-divergence, reversibility.
> Override?*

### User Override

User can:
- Force any tier: *"Lite only"* or *"Full depth"*
- Request re-assessment of specific signals: *"Re-check reversibility"*
- Override a specific signal score: *"Stake breadth is 1, not 0"* — agent updates scoreboard

Agent honors override without debate.

## Agent Fallback Guidelines

When MCP server is unavailable for a signal, agent detects the score from context using these heuristics.

### Oracle Latency (Agent Fallback)

- Check: does the user describe feedback as fast or slow?
- Check: is there a test suite or CI pipeline mentioned?
- Check: can the user get an answer by running something locally?

### Evidence Maturity (Agent Fallback)

- Check: are claims tagged with sources?
- Check: does the user say "I think" / "we assume" / "probably"?
- Check: is there a test suite or verification mechanism described?
- Check: are numbers cited with sources?

### Vocabulary Risk (Agent Fallback)

- Check: is the same word used in different ways by different participants?
- Check: are participants clarifying "what do you mean by X"?
- Check: are terms from different domains being mixed without definition?

### Stake Breadth (Agent Fallback)

- Check: is work described as split across people/teams/agents?
- Check: are multiple roles mentioned (developer, manager, researcher, auditor)?
- Check: does the problem require coordination?

### Audience Divergence (Agent Fallback)

- Check: does the user mention needing output for different readers?
- Check: is there a management summary AND a technical deep-dive needed?
- Check: are compliance/audit/regulatory readers implied?

### Reversibility (Agent Fallback)

- Check: what happens if the decision is wrong?
- Check: is there a production deployment, resource allocation, or contractual commitment implied?
- Check: can the decision be tested safely before full commitment?

## Versioning

| Field | Value |
|-------|-------|
| Version | 1.0.0 |
| MCP Server Namespace | `fpf-assessor` |
| Tool Name Pattern | `fpf-assessor.assess-<signal-name>` |
| Output Schema Version | 1.0.0 (uniform across all 6 tools) |
