import { mkdirSync, writeFileSync } from "node:fs";

// One line about crypto and trading life, under 200 characters.
const JOKE =
  "My trading strategy is simple: buy high, panic-sell low, then tell the group chat it was all part of the plan.";

// The gate only accepts 1-200 characters of non-whitespace text, so fail
// loudly here instead of writing an entry the scorer would reject.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
