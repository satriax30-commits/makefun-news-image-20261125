// "The World in One Day" — 25 November 2026 news poster entry.
//
// Node 22, standard library only. The poster image lives next to this file
// as entry.png; the program's only job is to place an exact copy of it at
// <output dir>/entry.png, where the output dir comes from
// MAKEFUN_OUTPUT_DIR (falling back to /output), and to prove the copy
// matches the original byte for byte before it exits.
//
// Run it locally like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const sourcePath = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(outputDir, 'entry.png');

// The gate only accepts a whole PNG or JPEG; refuse early if the bundled
// image does not even start with the PNG signature.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const header = readFileSync(sourcePath).subarray(0, PNG_SIGNATURE.length);
if (!header.equals(PNG_SIGNATURE)) {
  throw new Error('entry.png does not start with the PNG signature');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// Prove the copy is exact: hash both files and refuse to finish silently
// unless the digests agree.
const digest = (path: string): string =>
  createHash('sha256').update(readFileSync(path)).digest('hex');

const sourceDigest = digest(sourcePath);
const targetDigest = digest(targetPath);

if (sourceDigest !== targetDigest) {
  throw new Error(
    `entry.png copy mismatch: source ${sourceDigest} != output ${targetDigest}`,
  );
}

console.log(`Wrote ${targetPath} (sha256 ${targetDigest})`);
