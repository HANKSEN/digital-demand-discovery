import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "SKILL.md",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
  "agents/openai.yaml",
  ".claude-plugin/plugin.json",
  ".codex-plugin/plugin.json",
  "docs/install.md",
  "docs/compatibility.md",
  "references/first-principles.md",
  "references/model-router.md",
  "references/questioning-patterns.md",
  "references/solution-patterns.md",
  "references/output-template.md",
  "references/validation-roadmap.md"
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
}

const skill = read("SKILL.md");
const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/);
assert(frontmatter, "SKILL.md must start with YAML frontmatter");

const fields = Object.fromEntries(
  frontmatter[1]
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const index = line.indexOf(":");
      assert(index > 0, `Invalid frontmatter line: ${line}`);
      return [line.slice(0, index).trim(), line.slice(index + 1).trim()];
    })
);

assert(fields.name === "digital-demand-discovery", "Unexpected skill name");
assert(/^[a-z0-9-]+$/.test(fields.name), "Skill name must be hyphen-case");
assert(fields.name.length <= 64, "Skill name must be 64 characters or fewer");
assert(fields.description, "Missing skill description");
assert(fields.description.length <= 1024, "Skill description must be 1024 characters or fewer");
assert(!/[<>]/.test(fields.description), "Skill description must not contain angle brackets");

for (const manifest of [".claude-plugin/plugin.json", ".codex-plugin/plugin.json"]) {
  const parsed = JSON.parse(read(manifest));
  assert(parsed.name === "digital-demand-discovery", `${manifest} has unexpected name`);
  assert(Array.isArray(parsed.skills), `${manifest} must define skills array`);
  assert(parsed.skills.includes("."), `${manifest} must include root skill path`);
}

for (const reference of requiredFiles.filter((file) => file.startsWith("references/"))) {
  assert(skill.includes(reference), `SKILL.md must reference ${reference}`);
}

console.log("Skill validation passed");
