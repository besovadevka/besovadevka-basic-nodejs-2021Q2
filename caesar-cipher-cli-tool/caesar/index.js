#!/usr/bin/env node
const program = require("commander");
const { validateRequireArguments } = require("./src/helpers/validation.js");
const getProcessedData = require("./src/helpers/dataTransformation.js");

program
  .option("-s --shift <value>", "Shift value for coding")
  .option("-a, --action <value>", "What to do? Encode/decode")
  .option("-i, --input <value>", "An input file")
  .option("-o, --output <value>", "An output file")
  .parse(process.argv);

const { shift, action, input, output } = program.opts();

validateRequireArguments(shift, action);

getProcessedData(shift, action, input, output);
