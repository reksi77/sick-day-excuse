// The Funniest Sick-Day Excuse — make.fun bounty
// u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// Writes exactly one line to /output/entry.txt: a sick-day excuse
// that a boss might half believe and a coworker would laugh at.
// No trailing newline: the gate counts characters, 1-200.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I yawned too hard this morning and locked my jaw — I can only open my mouth wide enough for soup, so I'm taking the day off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
