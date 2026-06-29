import { cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const source = new URL("../dist/pagefind/", import.meta.url);
const target = new URL("../public/pagefind/", import.meta.url);

if (existsSync(source)) {
  await mkdir(target, { recursive: true });
  await cp(source, target, { recursive: true, force: true });
}
