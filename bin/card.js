#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const open = require("open");
const chalk = require("chalk");
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

const card = fs.readFileSync(path.join(__dirname, "card"), "utf8");
console.log(card);

const getQuestions = async () => {
  const { info } = await import("../build.mjs");
  return [
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
  ];
};

const displayPrompt = async () => {
  prompt(await getQuestions())
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
};

displayPrompt();
