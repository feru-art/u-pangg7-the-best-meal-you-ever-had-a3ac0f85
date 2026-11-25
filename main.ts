import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIRECTORY = "/output";
const OUTPUT_PATH = `${OUTPUT_DIRECTORY}/entry.txt`;
const ENTRY_TEXT =
  "After two days of hospital jelly, my sister's burnt grilled cheese on the ward bench tasted like someone had turned the lights back on inside me.";

function assertEntryShape(text: string): void {
  if (text.length === 0 || text.length > 200) {
    throw new Error("entry text must contain 1-200 characters");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry text must stay on one line");
  }
}

function writeEntry(): void {
  assertEntryShape(ENTRY_TEXT);
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_TEXT, { encoding: "utf8" });
}

writeEntry();
