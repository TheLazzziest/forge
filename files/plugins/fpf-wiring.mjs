import { validateDomainShapes } from "../skills/fpf/assets/validate-domain-shapes.mjs"
import { join } from "path"

/** @type {import("@opencode-ai/plugin").Plugin} */
export const FpfWiring = async ({ client, $, directory }) => {
  const { existsSync, readdirSync, readFileSync } = await import("fs")
  const skillsDir = join(directory, ".opencode/skills")
  const templatesDir = join(skillsDir, "fpf/assets/templates")
  const schemaPath = join(skillsDir, "fpf/assets/schemas/domain-skill.schema.json")

  return {
    "session.created": async () => {
      if (!existsSync(skillsDir) || !existsSync(schemaPath)) return

      const skills = readdirSync(skillsDir)
      for (const skill of skills) {
        const shapesPath = join(skillsDir, skill, "domain-shapes.json")
        if (!existsSync(shapesPath)) continue

        const result = validateDomainShapes(shapesPath, schemaPath)
        if (!result.valid) {
          await client.app.log({
            body: {
              level: "warn",
              service: "fpf",
              message: `Invalid domain-shapes.json in skill "${skill}"`,
              extra: { errors: result.errors }
            }
          })
        }
      }
    },

    "experimental.session.compacting": async (input, output) => {
      if (!existsSync(templatesDir)) return

      let pending = []

      // Check prediction log for unresolved predictions
      const predPath = join(templatesDir, "prediction-log.jsonl")
      if (existsSync(predPath)) {
        const lines = readFileSync(predPath, "utf8").trim().split("\n")
        const incomplete = lines.filter(l => l && !l.startsWith("//")).filter(l => {
          try { return JSON.parse(l).actual_outcome === null } catch { return false }
        })
        if (incomplete.length > 0) pending.push(`${incomplete.length} unresolved prediction(s) in prediction-log.jsonl`)
      }

      // Check decision log for records
      const decPath = join(templatesDir, "decision-log.jsonl")
      if (existsSync(decPath)) {
        const lines = readFileSync(decPath, "utf8").trim().split("\n").filter(l => l && !l.startsWith("//"))
        if (lines.length > 0) pending.push(`${lines.length} decision record(s) in decision-log.jsonl`)
      }

      // Check evidence log for pending records
      const evPath = join(templatesDir, "evidence-log.jsonl")
      if (existsSync(evPath)) {
        const lines = readFileSync(evPath, "utf8").trim().split("\n").filter(l => l && !l.startsWith("//"))
        if (lines.length > 0) pending.push(`${lines.length} evidence record(s) in evidence-log.jsonl`)
      }

      // Check vocabulary log for records
      const vocPath = join(templatesDir, "vocabulary-log.jsonl")
      if (existsSync(vocPath)) {
        const lines = readFileSync(vocPath, "utf8").trim().split("\n").filter(l => l && !l.startsWith("//"))
        if (lines.length > 0) pending.push(`${lines.length} vocabulary record(s) in vocabulary-log.jsonl`)
      }

      if (pending.length > 0) {
        output.context.push(`## FPF Artifacts (pending)\nThe following FPF reasoning artifacts exist from previous work:\n- ${pending.join("\n- ")}\n\nResume or finalize them as appropriate.`)
      }
    }
  }
}
