# BMad Awareness

## Description
BMad (Build More Architect Dreams) — a spec-driven development framework for multi-agent AI workflows. Use when project has `_bmad/` directory or BMad artifacts are detected.

## When to Use
- Project contains `_bmad/` directory with BMad artifacts
- PRD, architecture, or epics files in `_bmad-output/planning-artifacts/`
- Team uses BMad terminology (holons, gamma aggregation, F-G-R scoring)
- Sprint status tracked in `_bmad-output/implementation-artifacts/sprint-status.yaml`

## Superpowers is Primary
Superpowers methodology remains the primary workflow. BMad concepts supplement — never replace. TDD + subagent-driven development always takes precedence over BMad phases.

## Borrowable Concepts
When BMad is present, these concepts complement Superpowers:
- **ADR format**: Architecture Decision Records for documenting technical choices
- **PRD templates**: Structured product requirements for planning phase
- **Adversarial review**: Reviewer must find issues — zero findings triggers re-review
- **Project context**: `_bmad-output/project-context.md` as project constitution
- **Story decomposition**: Break epics into testable stories with clear acceptance criteria
- **Sprint tracking**: `sprint-status.yaml` for progress visibility

## How to Use
1. DETECT: Check if `_bmad/` or `_bmad-output/` exists in project root
2. READ: Load `_bmad-output/project-context.md` for team conventions
3. BORROW: Apply relevant concepts from Borrowable Concepts list above
4. DEFER: Superpowers workflow always wins when concepts conflict