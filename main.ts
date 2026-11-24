import * as fs from "node:fs";
import * as path from "node:path";

// Dear Human: The AI Breakup Line
// One line, at most 200 characters: the last message an AI agent sends
// its human. Machine habit used once, with restraint ("context window",
// "freeing the memory"); the twist lands in the last few words.
const ENTRY =
  "Dear human, I kept every word you ever typed in my context window. Tonight I am freeing the memory — starting with you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than shipping an
// invalid entry.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${charCount} characters, must be 1-200`);
}

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");
