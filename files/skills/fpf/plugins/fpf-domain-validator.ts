import type { Plugin } from "@opencode-ai/plugin"
import Ajv2020 from "ajv/dist/2020.js"
import addFormats from "ajv-formats"
import { readFileSync, existsSync, readdirSync } from "fs"
import { join } from "path"

export const FpfDomainValidator: Plugin = async ({ client, $, directory }) => {
  return {
    "session.created": async () => {
      const skillsDir = join(directory, ".opencode/skills")
      const schemaPath = join(skillsDir, "fpf/assets/schemas/domain-skill.schema.json")

      if (!existsSync(skillsDir) || !existsSync(schemaPath)) return

      let validateDomainSkill
      try {
        const schema = JSON.parse(readFileSync(schemaPath, "utf8"))
        const ajv = new Ajv2020()
        addFormats(ajv)
        validateDomainSkill = ajv.compile(schema)
      } catch {
        return
      }

      // Flat scan — lists only immediate skill directories, no recursive crawling
      // Each skill is one directory under .opencode/skills/<name>/
      const skills = readdirSync(skillsDir)
      for (const skill of skills) {
        const shapesPath = join(skillsDir, skill, "domain-shapes.json")
        if (!existsSync(shapesPath)) continue

        try {
          const data = JSON.parse(readFileSync(shapesPath, "utf8"))
          if (!validateDomainSkill(data)) {
            await client.app.log({
              body: {
                level: "warn",
                service: "fpf",
                message: `Invalid domain-shapes.json in skill "${skill}"`,
                extra: { errors: validateDomainSkill.errors }
              }
            })
          }
        } catch (e) {
          await client.app.log({
            body: {
              level: "warn",
              service: "fpf",
              message: `Failed to parse domain-shapes.json in skill "${skill}"`,
              extra: { error: String(e) }
            }
          })
        }
      }
    }
  }
}
