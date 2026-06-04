// Pure function: validates a domain-shapes.json file against the domain-skill schema.
// No OpenCode dependencies. Usable by any OCX plugin, MCP tool, or CLI script.
//
// Usage:
//   import { validateDomainShapes } from "forge/fpf/assets/validate-domain-shapes.js"
//   const result = validateDomainShapes("/path/to/domain-shapes.json", "/path/to/domain-skill.schema.json")

import Ajv2020 from "ajv/dist/2020.js"
import addFormats from "ajv-formats"
import { readFileSync, existsSync } from "fs"

const ajv = new Ajv2020()
addFormats(ajv)

// Cache compiled schema to avoid recompiling on every call
let compiledSchema = null
let lastSchemaPath = null

export function validateDomainShapes(jsonFilePath, schemaPath) {
  if (!existsSync(jsonFilePath)) {
    return { valid: false, errors: [{ message: `File not found: ${jsonFilePath}` }] }
  }

  // Compile schema once and cache
  if (schemaPath !== lastSchemaPath || !compiledSchema) {
    const raw = readFileSync(schemaPath, "utf8")
    const schema = JSON.parse(raw)
    compiledSchema = ajv.compile(schema)
    lastSchemaPath = schemaPath
  }

  try {
    const data = JSON.parse(readFileSync(jsonFilePath, "utf8"))
    const valid = compiledSchema(data)
    if (valid) return { valid: true, errors: [] }
    return { valid: false, errors: compiledSchema.errors }
  } catch (e) {
    return { valid: false, errors: [{ message: e.message }] }
  }
}
