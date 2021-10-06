#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};
const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);
