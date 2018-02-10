#!/usr/bin/env node

// "test": "./src/commander.js -V --peppers -P"

const log = console.log;
const commander = require("commander");

log("foo");
commander
  .version("0.1.0")
  .option("-p, --peppers", "Add peppers")
  .option("-P, --pineapple", "Add pineapple")
  .option("-b, --bbq-sauce", "Add bbq sauce")
  .option(
    "-c, --cheese [type]",
    "Add the specified type of cheese [marble]",
    "marble"
  )
  .parse(process.argv);

log("you ordered a pizza with:");
if (commander.peppers) log("  - peppers");
if (commander.pineapple) log("  - pineapple");
if (commander.bbqSauce) log("  - bbq");
log("  - %s cheese", commander.cheese);

log(`hi`);
