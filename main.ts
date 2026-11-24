// How Many Tabs Do You Have Open?
// Writes the honest count of open browser tabs: one number, digits only.
//
// Deterministic: the count is a fixed, counted answer baked into the program
// (a real tab count from a research-heavy browser session), so every run
// produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAB_COUNT = 47;

// Competition gate: entry.txt must be UTF-8, 1-5 characters, digits only.
// Validate the formatted text before writing so a bad count fails loudly
// instead of producing a gate-invalid entry file.
const entryText = String(TAB_COUNT);
if (!/^[0-9]{1,5}$/.test(entryText)) {
  throw new Error(`Invalid tab count for entry: ${JSON.stringify(entryText)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryText, "utf8");
