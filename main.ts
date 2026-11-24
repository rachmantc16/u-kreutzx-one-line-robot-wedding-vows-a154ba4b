// One-Line Robot Wedding Vows — make.fun bounty entry.
//
// Builds the funniest single line of wedding vows a robot couple could
// say and writes it, with no trailing newline, to /output/entry.txt.
// The vow is assembled from a classic vow skeleton ("in sickness and in
// health", "till death do us part") with every human term swapped for a
// machine one, so the joke pays off in the final words.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 160;

// The vow, in three beats: the paired conditions, the shared resources,
// and the closing twist on "till death do us part". The first draft ran
// 182 characters, so the conditions were cut to a single pair and the
// parting beat sharpened: the update that ends the marriage is not just
// final, it is unskippable — the word the laugh lands on.
const conditions = "in glitch and in update";
const sharing = "to share my charger, my bandwidth, and my last backup";
const parting = "till death — or one final unskippable update — do us part";

const vow = `I vow to love you ${conditions}, ${sharing}, ${parting}.`;

if (vow.length < 1 || vow.length > MAX_CHARS) {
  throw new Error(`vow is ${vow.length} characters; must be 1-${MAX_CHARS}`);
}
if (vow.includes("\n")) {
  throw new Error("vow must be exactly one line");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, vow, "utf8"); // no trailing newline: it would count as a character

console.log(`wrote ${vow.length} characters to ${OUTPUT_PATH}`);
