// Absurd Micro-Startup Pitch-Off entry (u-ricoxyz-absurd-micro-startup-pitch-off-12e33571).
// Deterministic: writes one fixed sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only. No network, no secrets, no other writes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "CaptchaHands hires bored humans to click 'I'm not a robot' for lazy AI agents locked out of their own accounts, charging the agents $0.10 per click so they never lift a finger.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
