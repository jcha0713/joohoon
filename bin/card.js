#!/usr/bin/env node

import fs from "fs";
import open from "open";
import path from "path";
import chalk from "chalk";
import * as url from "url";
import inquirer from "inquirer";
import { info } from "../build.js";

const prompt = inquirer.createPromptModule();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const card = fs.readFileSync(path.join(__dirname, "card"), "utf8");
console.log(card);

prompt([
  {
    name: "open",
    type: "list",
    message: chalk.blue("Where do you want to go?"),
    choices: [
      {
        name: "blog",
        value: () => {
          open(info?.social.web);
        },
      },
      {
        name: "github",
        value: () => {
          open(info?.social.github[0] + info?.social.github[1]);
        },
      },
      {
        name: "twitter",
        value: () => {
          open(info?.social.twitter[0] + info?.social.twitter[1]);
        },
      },
      {
        name: "quit",
        value: () => console.log("see you again!"),
      },
    ],
  },
])
  .then((answer) => {
    answer.open();
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(
        "Sorry, the prompt was not able to be rendered in the current environment."
      );
    } else {
      console.error(error);
    }
  });
