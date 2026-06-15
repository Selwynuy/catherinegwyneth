import { chromium } from "playwright-core";
import os from "node:os";
import path from "node:path";

const CHROME = path.join(
  os.homedir(),
  "AppData/Local/ms-playwright/chromium-1223/chrome-win64/chrome.exe",
);
const URL = process.env.URL || "http://localhost:3000";

const shots = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch({ executablePath: CHROME });
const errors = [];

for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: 2,
    // Reduced-motion makes <Reveal> render immediately visible, so full-page
    // screenshots capture every section truthfully (no scroll-race blanks).
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${s.name}] ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${s.name}] PAGEERROR ${e.message}`));
  await page.goto(URL, { waitUntil: "networkidle" });
  // Trigger scroll reveals by scrolling to the bottom and back.
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const t = setInterval(() => {
        y += window.innerHeight;
        window.scrollTo(0, y);
        if (y >= document.body.scrollHeight) {
          clearInterval(t);
          window.scrollTo(0, 0);
          r();
        }
      }, 60);
    });
  });
  await page.waitForTimeout(900);
  await page.screenshot({
    path: `scripts/out/${s.name}.png`,
    fullPage: true,
  });
  // Also a viewport-only hero shot.
  await page.screenshot({ path: `scripts/out/${s.name}-hero.png` });
  await ctx.close();
  console.log(`shot: ${s.name} (${s.width}x${s.height})`);
}

await browser.close();
if (errors.length) {
  console.log("\nCONSOLE ERRORS:");
  errors.forEach((e) => console.log("  " + e));
} else {
  console.log("\nNo console errors.");
}
