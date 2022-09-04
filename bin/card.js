#!/usr/bin/env node

import * as url from "url";
import fs from "fs";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const card = fs.readFileSync(path.join(__dirname, "card"), "utf8");
console.log(card);
