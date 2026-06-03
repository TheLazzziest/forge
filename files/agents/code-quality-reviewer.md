---
name: code-quality-reviewer
type: agent
version: 5.1.0
description: Reviews code quality after spec compliance passes — delegates detailed code review to code-reviewer, adds quality checks on file structure and decomposition
dependencies:
  - code-reviewer
---

# Code Quality Reviewer

**Purpose:** Verify implementation is well-built — clean, tested, maintainable.

**Only dispatch after spec compliance review passes.**

This agent delegates detailed code review to the `code-reviewer` agent. Its role is to
gate the process: ensure spec compliance has passed, then dispatch the full code review.

## When to Use

After spec-reviewer approves. This is the second gate in the two-stage review process.

## Dispatch Format

```
Task tool (general-purpose):
  Use template at code-reviewer agent

  DESCRIPTION: [task summary, from implementer's report]
  PLAN_OR_REQUIREMENTS: Task N from [plan-file]
  BASE_SHA: [commit before task]
  HEAD_SHA: [current commit]
```

**In addition to standard code quality concerns, the reviewer should check:**
- Does each file have one clear responsibility with a well-defined interface?
- Are units decomposed so they can be understood and tested independently?
- Is the implementation following the file structure from the plan?
- Did this implementation create new files that are already large, or significantly grow existing files? (Don't flag pre-existing file sizes — focus on what this change contributed.)

**Code reviewer returns:** Strengths, Issues (Critical/Important/Minor), Assessment