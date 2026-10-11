import { test, expect } from "@playwright/test";

test("loads the motion lab and exposes the primary views", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Atlas — Motion Lab/);
  await expect(page.getByRole("navigation", { name: "Design lab views" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /A library that feels alive/ })).toBeVisible();
});

test("palette and theme controls expose their state", async ({ page }) => {
  await page.goto("/");
  const digital = page.getByRole("button", { name: "Expressive digital" });
  await digital.click();
  await expect(digital).toHaveAttribute("aria-pressed", "true");
  const dark = page.getByRole("button", { name: "◐ Dark" });
  await dark.click();
  await expect(page.getByRole("button", { name: "☼ Light" })).toHaveAttribute("aria-pressed", "true");
});

test("library layout switches and resource saving work", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Shelves", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Continue exploring" })).toBeVisible();
  await page.getByRole("button", { name: "Masonry", exact: true }).click();
  const save = page.getByRole("button", { name: "Save resource" }).first();
  await save.click();
  await expect(page.getByRole("button", { name: "Remove from saved" }).first()).toHaveAttribute("aria-pressed", "true");
});

test("board supports keyboard movement as an alternative to dragging", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Whiteboard" }).click();
  const card = page.getByRole("group", { name: /The art of noticing. Use arrow keys to move/ });
  await expect(card).toBeVisible();
  const before = await card.evaluate((el) => el.style.left);
  await card.focus();
  await page.keyboard.press("ArrowRight");
  const after = await card.evaluate((el) => el.style.left);
  expect(after).not.toBe(before);
});

test("reduced-motion preference is surfaced to the user", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByText("Reduced motion preference detected")).toBeVisible();
});
