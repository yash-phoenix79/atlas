#!/usr/bin/env node
/**
 * Deterministic static checks for the standalone Atlas visual-system lab.
 * Run: node scripts/audit-atlas-visual-lab.mjs [path-to-html]
 * This checks declared design tokens and key source-level accessibility safeguards;
 * it does not replace browser, screen-reader, or hands-on usability testing.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const file = resolve(process.argv[2] ?? "docs/mockups/atlas-visual-system-lab.html");
const html = readFileSync(file, "utf8");
const css = html.match(/<style>([\s\S]*?)<\/style>/i)?.[1];
if (!css) throw new Error("No inline stylesheet found.");

const rules = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(([, selector, body]) => ({
  selector: selector.trim(),
  vars: Object.fromEntries([...body.matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8})/g)].map(([, key, value]) => [key, value])),
}));
const apply = (state) => {
  const vars = {};
  for (const rule of rules) {
    const s = rule.selector;
    const matches =
      s === ":root" ||
      (s.includes('body[data-palette="digital"]') && state.palette === "digital" && !s.includes("data-theme")) ||
      (s.includes('body[data-palette="warm"]') && state.palette === "warm" && !s.includes("data-theme")) ||
      (s.includes('body[data-theme="dark"]') && state.theme === "dark" && !s.includes("data-palette")) ||
      (s.includes('body[data-theme="dark"][data-palette="digital"]') && state.theme === "dark" && state.palette === "digital") ||
      (s.includes('body[data-theme="dark"][data-palette="warm"]') && state.theme === "dark" && state.palette === "warm");
    if (matches) Object.assign(vars, rule.vars);
  }
  return vars;
};
const rgb = (hex) => {
  let h = hex.slice(1);
  if (h.length === 3) h = [...h].map((x) => x + x).join("");
  if (h.length === 8) h = h.slice(0, 6);
  const c = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  return c.map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
};
const luminance = (hex) => {
  const [r, g, b] = rgb(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const errors = [];
const results = [];
for (const palette of ["organic", "digital", "warm"]) {
  for (const theme of ["light", "dark"]) {
    const v = apply({ palette, theme });
    for (const key of ["--bg", "--surface", "--ink", "--muted", "--accent", "--accent2"]) {
      if (!v[key]) errors.push(`${palette}/${theme}: missing ${key}`);
    }
    if (errors.length) continue;
    const pairs = [
      ["ink/background", v["--ink"], v["--bg"], 4.5],
      ["muted/background", v["--muted"], v["--bg"], 4.5],
      ["ink/surface", v["--ink"], v["--surface"], 4.5],
      ["muted/surface", v["--muted"], v["--surface"], 4.5],
      ["accent/accent-surface", v["--accent"], v["--accent2"], 4.5],
    ];
    for (const [label, fg, bg, min] of pairs) {
      const ratio = contrast(fg, bg);
      results.push({ palette, theme, pair: label, ratio: Number(ratio.toFixed(2)), min });
      if (ratio < min) errors.push(`${palette}/${theme} ${label}: ${ratio.toFixed(2)}:1 < ${min}:1`);
    }
  }
}
for (const item of results) console.log(`${item.palette.padEnd(8)} ${item.theme.padEnd(5)} ${item.pair.padEnd(22)} ${item.ratio.toFixed(2)}:1`);
for (const [label, pattern] of [
  ["reduced-motion CSS", /prefers-reduced-motion\s*:\s*reduce/],
  ["keyboard board controls", /function enableKeyboardMove\(card\)/],
  ["focus-visible indicator", /:focus-visible/],
  ["graph keyboard interaction", /n\.addEventListener\("keydown"/],
  ["semantic tabs", /aria-label="Atlas modes"/],
]) {
  if (!pattern.test(html)) errors.push(`missing source safeguard: ${label}`);
}
if (errors.length) {
  console.error("\nFAIL");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`\nPASS: ${results.length} contrast pairs and 5 source-level safeguards checked.`);
}
