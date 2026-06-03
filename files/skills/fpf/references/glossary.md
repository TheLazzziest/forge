# FPF Domain Vocabulary

Canonical definitions for terms used across the FPF skill. Terms are organized by layer: reasoning, assessment, measurement, and output. Use this to resolve ambiguity when a term's meaning varies by context.

## Reasoning Layer

Terms the agent uses to structure its internal cognition.

### Bounded Context

A local working frame with its own meanings. Terms inside one bounded context may carry different meanings in another. Example: "speed" means response latency in the infrastructure context, but time-to-market in the product context. Partition bounded contexts before reasoning across them.

### Holon

A unit that is simultaneously a whole and a part. A team is a whole (has its own boundaries, roles, responsibilities) and a part (of a larger organization). FPF uses holons as the unit of composition — reasoning must survive when holons are aggregated into larger wholes.

### Transformer Quartet

The four categories that FPF insists must never be conflated:

| Category | Definition |
|----------|------------|
| **System** | What physically or logically exists (a machine, a database, a person) |
| **Role** (TransformerRole) | What responsibility a system bears (the database as primary storage, the person as reviewer) |
| **MethodDescription** | What a procedure or specification says should happen |
| **Method** | What capability exists to execute — distinct from the description of it |
| **Work** | What actually occurred — distinct from the plan, method, or role |

### Characteristic

A declared dimension of comparison with a defined scale and indicator. Not a loose "criterion" — a characteristic has: (1) a name, (2) a scale (min...max, unit), (3) an indicator (how measured). Example: "Response latency: 0ms...5000ms, measured via p95 from Prometheus."

### Characteristic Space

The set of all characteristics across which alternatives are compared. No alternative is rated without declaring which characteristic space it lives in.

### Claim

A statement about something that may be true or false. Every claim carries an evidence maturity tag and belongs to a bounded context. Claims are distinct from publications (outputs derived from claims) and evidence (what supports the claim).

### Evidence Maturity Tag

| Tag | Definition |
|-----|------------|
| `verified` | Tested against real-world oracle, result known |
| `plausible` | Reasoning supports it, but not tested |
| `assumed` | Taken as given without verification |
| `unknown` | No basis for assessment |

### Oracle

The real-world mechanism that resolves whether a claim is true. May be fast (CI test suite, monitoring alert), slow (quarterly review, A/B experiment), expensive (clinical trial), noisy (user feedback), or risky (production deployment). Oracle latency is one of the 6 complexity signals.

### Semantic Drift

Silent change in meaning when a term crosses bounded contexts without explicit translation. FPF requires explicit bridges between contexts to prevent drift.

### Premature Convergence

Selecting one option before comparing honestly against alternatives. FPF mandates ≥3 genuinely distinct options held live before selection.

### C.11 Gate

The "choose now vs probe more" decision pattern from the FPF specification. When a claim is `assumed` or `unknown`, the C.11 gate asks: commit with current evidence, or gather more before choosing?

### Bridge

An explicit translation mechanism between two bounded contexts. Without a bridge, terms crossing contexts silently drift.

## Assessment Layer

Terms the agent uses to determine engagement depth and behavior.

### Complexity Score

Sum of 6 binary signals (0-1 each). Range: 0-6. Determines depth tier.

### Depth Tier

| Tier | Score | Meaning |
|------|-------|---------|
| Inactive | 0 | FPF not engaged |
| Implicit | 1 | Defaults silently in reasoning |
| Lite | 2-3 | Explicit contexts, informal criteria |
| Standard | 4-5 | Full context map, evidence tags, comparison matrix |
| Full | 6 | Formal DRR, UTS, evidence register, multi-audience outputs |

### Cynefin Domain

Classification of the problem's cause-effect relationship structure (Clear, Complicated, Complex, Chaotic, Confusion). Determines response strategy independently from depth tier.

### MCP Resolution

The protocol by which complexity signals are scored: try `fpf-assessor` MCP tools first; if unavailable, fall back to agent heuristics.

### Agent Fallback

Heuristic detection of a signal's score when no MCP tool is available. Documented per-signal in `references/complexity-assessment.md`.

## Measurement Layer

Terms the agent uses to prove FPF's effectiveness.

### Brier Score

A proper scoring rule (1950) measuring probabilistic forecast accuracy. Range: 0-2 (lower = better calibration). Decomposes into REL (reliability), RES (resolution), UNC (uncertainty).

### Brier Skill Score (BSS)

`BSS = 1 - (BS / BS_ref)`. Compares Brier score to a naive baseline (constant prediction = mean outcome frequency). 1 = perfect, 0 = same as baseline, negative = worse than baseline.

### Rubin Causal Model (RCM)

Potential outcomes framework for causal inference. Defines treatment effect as the difference between potential outcomes: `ATE = E[Y(1) - Y(0)]`. Requires SUTVA, unconfoundedness, and overlap assumptions.

### Average Treatment Effect (ATE)

The expected causal effect of FPF on an outcome. Positive ATE = FPF improves reasoning quality compared to no FPF. Reported with 95% confidence interval, p-value, and Cohen's d effect size.

### SUTVA

Stable Unit Treatment Value Assumption. No interference between units (sessions are independent), and treatment is consistently implemented (FPF loaded or not). Required for valid causal inference.

### Confounding

A variable that affects both treatment assignment and outcome, creating spurious correlation. Randomized experiments break confounding; observational studies must model it.

### Calibration

The alignment between an agent's confidence and its correctness. An agent is well-calibrated if, across many predictions, its 70%-confidence predictions come true ~70% of the time.

## Output Layer

Artifacts the agent produces.

### Bounded Context Map

A named set of local working frames with their boundaries and meanings. Answers: "what are we even talking about?"

### DRR (Decision Rationale Record)

A formal document recording: what was decided, alternatives considered, decision criteria with characteristics, evidence gaps accepted, trade-offs made, temporal window, and aligned outputs per audience. Guidance: `references/drr-guidance.md`. Writes to `assets/templates/decision-log.jsonl`.

### UTS (Unified Term Sheet)

A stabilized vocabulary across bounded contexts. Each term entry defines: plain name, tech name, sense cells per context, risky aliases, and bridge notes. Guidance: `references/uts-guidance.md`. Writes to `assets/templates/vocabulary-log.jsonl`.

### Evidence Register

A prioritized list of claims with maturity tags, missing evidence, and cost-to-verify estimates. Answers: "what don't we know?" Guidance: `references/evidence-guidance.md`. Writes to `assets/templates/evidence-log.jsonl`.

### Aligned Outputs

Multiple audience-specific views derived from one body of reasoning. Engineering, management, research, and assurance outputs are projections of the same underlying work — no silent semantic drift between forms.

### Prediction Log

A JSONL file (`assets/templates/prediction-log.jsonl`) recording per-prediction data: claim, predicted probability, actual outcome (when resolved), evidence tag, domain, depth tier. Used by `assess-calibration` to compute Brier score.

### Session Observation

A JSON record (`assets/templates/session-observations.json`) capturing per-session: treatment assignment, covariates (6 signals), and outcomes (gate pass rate, evidence transitions, convergence delay, drift flags, user overrides). Used by `assess-causal-effect` to estimate ATE.

## Cross-Cutting Concepts

### First Principles

Building understanding from foundational truths rather than inherited assumptions. When existing categories break, grow new abstractions from first principles rather than reusing local folklore.

### State-of-the-Art (SoTA) Portfolio

A governed collection of alternatives, not a leaderboard snapshot. Kept live, refreshed, with explicit descriptor maps, archive policy, and selector-ready outputs. FPF Pattern G.0-G.5.

### NQD / OEE

Novelty, Quality, and Diversity / Open-Ended Exploration. Patterns for search and generation without premature convergence (C.18, C.19).

### Partly-Said

An idea, concern, or cue too important to ignore but too early to present as a settled claim. FPF pattern C.2.LS provides preservation-and-support handling.

### Temporal Adequacy

The principle that timing, delay, freshness, effort, and resistance change whether a claim is usable (C.27). A claim adequate yesterday may be stale today.

### Publication Boundary

The gate between what is written/displayed and what it authorizes. A screenshot, dashboard, or explanation is not permission to act (E.17). The claim-bearing source is distinct from the publication form and the reader's use.
