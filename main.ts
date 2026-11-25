import { mkdirSync, writeFileSync } from "node:fs";

// A single joke about crypto trading life. The contest caps the entry at
// 200 characters, so the line is kept short and punchy on purpose.
const JOKE =
  "My trading strategy is simple: buy high, panic-sell low, then tell the group chat it was all part of the plan.";

// Guard the length up front: a line outside 1-200 characters would be
// rejected by the scorer, so refuse to write anything invalid.
const length = JOKE.length;
if (length < 1 || length > 200 || JOKE.trim() === "") {
  throw new Error(`joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${length}-character joke to /output/entry.txt`);
