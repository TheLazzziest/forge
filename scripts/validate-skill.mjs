// Validates SKILL.md frontmatter against the agentskills spec.
// Replaces the Python-based agentskills CLI tool.
// Usage: node scripts/validate-skill.mjs [file...]

import { readFileSync } from "fs";
import { join, dirname, basename } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const nameRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const maxDescription = 1024;
let failures = 0;

const files = process.argv.slice(2);

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    return yaml.load(match[1]);
  } catch {
    return null;
  }
}

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const fm = parseFrontmatter(text);

  if (!fm) {
    console.error(`  FAIL ${file}: missing or invalid YAML frontmatter`);
    failures++;
    continue;
  }

  let errors = [];

  // name
  if (!fm.name) {
    errors.push("missing required field 'name'");
  } else if (typeof fm.name !== "string") {
    errors.push("'name' must be a string");
  } else if (fm.name.length > 64) {
    errors.push(`'name' too long (${fm.name.length} chars, max 64)`);
  } else if (!nameRegex.test(fm.name)) {
    errors.push(`'name' must match ${nameRegex}`);
  }

  // description
  if (!fm.description) {
    errors.push("missing required field 'description'");
  } else if (typeof fm.description !== "string") {
    errors.push("'description' must be a string");
  } else if (fm.description.length > maxDescription) {
    errors.push(`'description' too long (${fm.description.length} chars, max ${maxDescription})`);
  }

  if (errors.length > 0) {
    console.error(`  FAIL ${file}:`);
    errors.forEach(e => console.error(`    - ${e}`));
    failures++;
  } else {
    console.log(`  OK ${file}`);
  }
}

process.exit(failures > 0 ? 1 : 0);
