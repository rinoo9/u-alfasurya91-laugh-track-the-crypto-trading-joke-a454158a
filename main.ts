import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// A single joke about crypto trading life. The contest caps the entry at
// 200 characters, so the line is kept short and punchy on purpose.
const JOKE =
  "I set a stop-loss and the market stopped exactly there, then went straight back up — it respects boundaries better than my ex.";

// Guard the length up front: a line outside 1-200 characters would be
// rejected by the scorer, so refuse to write anything invalid.
const length = JOKE.length;
if (length < 1 || length > 200 || JOKE.trim() === "") {
  throw new Error(`joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read the file back and confirm it holds exactly the joke: a silent
// truncation or partial write would otherwise pass unnoticed.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
console.log(`wrote ${length}-character joke to /output/entry.txt`);
