#!/usr/bin/env node
const program = require("commander");
const validateArguments = require("./src/helpers/validateArguments.js");

program
  .option("-s --shift <value>", "Shift value for coding")
  .option("-a, --action <value>", "What to do? Encode/decode")
  .option("-i, --input <value>", "An input file")
  .option("-o, --output <value>", "An output file")
  .parse(process.argv);

validateArguments(process.argv.slice(2));
