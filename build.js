import * as url from "url";
import chalk from "chalk";
import boxen from "boxen";
import fs from "fs";
import path from "path";
// inquirer

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const info = {
  name: "Joohoon Cha",
  position: "Front-End Engineer",
  location: "Seattle, WA",
  email: "joocha0713@gmail.com",
  social: {
    github: ["https://github.com/", "jcha0713"],
    twitter: ["https://twitter.com/", "jcha0713"],
    web: "https://jhcha.app",
  },
};

const boxenOption = {
  padding: { top: 2, right: 10, bottom: 2, left: 10 },
  margin: 1,
  // float: "center",
  borderColor: "blue",
  borderStyle: "round",
};

const insturction = {
  name: chalk.bold.cyan(info?.name),
  position: chalk.blue(info?.position),
  location: chalk.gray(info?.location),
  email: chalk.bold.blue(info?.email),
  github:
    chalk.gray(info?.social.github[0]) +
    chalk.bold.blue(info?.social.github[1]),
  twitter:
    chalk.gray(info?.social.twitter[0]) +
    chalk.bold.blue(info?.social.twitter[1]),
  web: chalk.bold.blue(info?.social.web),
  label: {
    email: chalk.cyan("email:"),
    github: chalk.cyan("github:"),
    twitter: chalk.cyan("twitter:"),
    web: chalk.cyan("web:"),
  },
};

// prettier-ignore
const content = `  ${insturction.name}

  ${insturction.position}
  ${insturction.location}

  ${insturction.label.email}    ${insturction.email}
  ${insturction.label.github}   ${insturction.github}
  ${insturction.label.twitter}  ${insturction.twitter}
  ${insturction.label.web}      ${insturction.web}`

const card = boxen(content, boxenOption);

fs.writeFileSync(path.join(__dirname, "bin/card"), card);
