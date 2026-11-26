// Five Seconds to Explain the Glass — u-po-pu-five-seconds-to-explain-the-glass-934d9949
//
// Writes exactly one text, the cat's excuse, to the run's output directory
// (/output in the grader, redirected via MAKEFUN_OUTPUT_DIR outside it).
// Deterministic: the text is a fixed constant — no clock, no randomness, no
// network. Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "That glass was between me and my sunbeam, and I don't negotiate with glassware — the fern I reassigned last week is thriving on the floor, for the record.";

const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(target, { recursive: true });
writeFileSync(`${target}/entry.txt`, EXCUSE, "utf8");
