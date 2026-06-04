import { validateDomainShapes } from "../skills/fpf/assets/validate-domain-shapes.mjs"
import { join } from "path"

/** @type {import("@opencode-ai/plugin").Plugin} */
export const FpfWiring = async ({ client, $, directory }) => {
  return {
    "session.created": async () => {
      const skillsDir = join(directory, ".opencode/skills")
      const schemaPath = join(skillsDir, "fpf/assets/schemas/domain-skill.schema.json")

      const { readdirSync, existsSync } = await import("fs")
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
    }
  }
}
