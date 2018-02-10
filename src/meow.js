#!/usr/bin/env node
"use strict";
const meow = require("meow");
const log = console.log;
// const foo = require(".");

const cli = meow(
  `
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`,
  {
    flags: {
      rainbow: {
        type: "boolean",
        alias: "r"
      }
    }
  }
);
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/

log(cli.input[0], cli.flags);
