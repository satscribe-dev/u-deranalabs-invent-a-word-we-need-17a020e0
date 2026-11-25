// Entry writer — make.fun bounty u-deranalabs-invent-a-word-we-need-17a020e0
// "Invent a Word We Need": coin one new English word + one-line definition.
// Writes the single chosen entry to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "introblank — forgetting someone's name at the exact moment you start introducing them.";

// Gate self-check (bounty gate: /output/entry.txt UTF-8, 1–140 chars, not only whitespace).
const len = [...ENTRY].length;
if (len < 1 || len > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${len} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
