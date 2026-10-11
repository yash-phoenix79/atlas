#!/usr/bin/env node
/**
 * Source-level guardrails for the architecture divergence concept.
 * Run: node scripts/audit-atlas-architecture-lab.mjs [path-to-html]
 *
 * These assertions detect misleading claims and missing baseline safeguards.
 * They do not execute the page and do not replace browser/accessibility testing.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const file = resolve(process.argv[2] ?? "docs/mockups/atlas-architecture-divergence-lab.html");
const html = readFileSync(file, "utf8");
const errors = [];
const checks = [
  ["document language", /<html[^>]*lang="en"/i],
  ["viewport metadata", /<meta[^>]+name="viewport"/i],
  ["focus-visible style", /:focus-visible/],
  ["reduced-motion handling", /prefers-reduced-motion\s*:\s*reduce/],
  ["architecture choice has accessible group name", /role="group"[^>]+aria-label="Choose architecture"/],
  ["all three architecture modes", /data-view="library"/, /data-view="spatial"/, /data-view="research"/],
  ["honest prototype limitation in page copy", /No backend, real semantic search, durable persistence, external integrations, or AI is connected/],
  ["research content labeled fabricated", /fabricated demonstration content, not source-verified evidence/],
  ["spatial limitations acknowledged", /pan\/zoom is not implemented/],
  ["capture durability limitations acknowledged", /Saved locally in this demonstration/],
];

for (const check of checks) {
  const [name, ...patterns] = check;
  for (const pattern of patterns) {
    if (!pattern.test(html)) errors.push(`${name}: missing ${pattern}`);
  }
}
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]).filter((s) => s.trim());
if (scripts.length === 0) errors.push("no inline JavaScript found");
for (const [i, script] of scripts.entries()) {
  // Syntax-only check. Does not execute the script or provide browser globals.
  try {
    // eslint-disable-next-line no-new-func
    new Function(script);
  } catch (e) {
    errors.push(`inline script ${i + 1} syntax error: ${e.message}`);
  }
}

if (errors.length) {
  console.error("FAIL — architecture lab source audit");
  for (const e of errors) console.error(`- ${e}`);
  process.exitCode = 1;
} else {
  console.log(`PASS — ${checks.reduce((n, c) => n + c.length - 1, 0)} source guardrails and ${scripts.length} inline script(s) parse.`);
  console.log("LIMITATION — no browser execution, accessibility tree, responsive rendering, or task-based user study was performed.");
}
