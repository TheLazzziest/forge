// Validates JSON Schema files (*.schema.json) and domain shape files (domain-shapes.json).
// Called by lint-staged with staged file paths as arguments.
// Usage: node scripts/validate-schemas.mjs [files...]

import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const ajv = new Ajv2020();
addFormats(ajv);

const files = process.argv.slice(2);
if (files.length === 0) process.exit(0);

let failures = 0;

// Pre-load domain-skill schema for validating domain-shapes.json
const domainSkillSchema = JSON.parse(readFileSync(
  resolve(projectRoot, "files/skills/fpf/assets/schemas/domain-skill.schema.json"), "utf8"
));
const validateDomainSkill = ajv.compile(domainSkillSchema);

for (const file of files) {
  try {
    const data = JSON.parse(readFileSync(file, "utf8"));

    if (file.endsWith("domain-skill.schema.json")) {
      // Already validated during startup (compiled as reference schema for domain-shapes)
      console.log(`  OK ${file}`);

    } else if (file.endsWith("domain-shapes.json")) {
      // Validate against domain-skill schema (not as a JSON Schema)
      if (!validateDomainSkill(data)) {
        console.error(`  FAIL ${file}: ${JSON.stringify(validateDomainSkill.errors)}`);
        failures++;
      } else {
        console.log(`  OK ${file}`);
      }

    } else if (file.endsWith(".schema.json")) {
      // Validate as JSON Schema Draft 2020-12
      ajv.compile(data);
      console.log(`  OK ${file}`);
    }
  } catch (e) {
    console.error(`  FAIL ${file}: ${e.message}`);
    failures++;
  }
}

process.exit(failures > 0 ? 1 : 0);
