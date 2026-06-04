const Ajv = require("ajv");
const glob = require("glob");
const fs = require("fs");
const path = require("path");
const os = require("os");

// Load your AgentSkill/OVOS Schema
const schema = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "../schemas/agentskill-spec.json"),
    "utf8",
  ),
);

const ajv = new Ajv({
  allErrors: process.env.AjvAllErrors === "true",
  strict: process.env.AjvStrict === "true",
});
const validate = ajv.compile(schema);

// Target only valid OVOS skill.json locations: locale/<lang>/skill.json
// This avoids validating random JSON files in the repo
const files = glob.sync("**/locale/*/skill.json", {
  ignore: "**/node_modules/**",
});

let hasErrors = false;

console.log(`Validating ${files.length} skill manifests...\n`);

files.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const valid = validate(data);

  if (!valid) {
    hasErrors = true;
    console.error(`❌ Invalid: ${file}`);
    validate.errors.forEach((err) => {
      console.error(`   ${err.instancePath || "/"}: ${err.message}`);
    });
    console.error(""); // Empty line for readability
  } else {
    console.log(`✅ Valid: ${file}`);
  }
});

if (hasErrors) {
  console.error("\n❌ Validation failed. Commit blocked.");
  process.exit(1);
} else {
  console.log("\n✅ All skills valid.");
  process.exit(0);
}
