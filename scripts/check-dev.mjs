#!/usr/bin/env node
/**
 * Ensures dev is run from the project root (where app/page.tsx exists).
 * Prevents 404 at / caused by running from the wrong directory.
 */
import { existsSync } from "fs";
import { resolve } from "path";

const cwd = process.cwd();
const pagePath = resolve(cwd, "app", "page.tsx");

if (!existsSync(pagePath)) {
  console.error("\nError: app/page.tsx not found.");
  console.error("   Run 'npm run dev' from the project root (the folder that contains 'app/' and 'package.json').");
  console.error("   Current directory: " + cwd + "\n");
  process.exit(1);
}
