const fs = require("fs");
const getArgsValue = require("./getArgsValues");
const codeMessage = require("./codeInputFile");
const writeInOutputFile = require("./writeInOutputFile");

const getDataFromInputFile = (index) => {
  const additionalIndexToGetInputFile = 3;
  const path = process.argv[index + additionalIndexToGetInputFile];
  fs.readFile(path, "utf8", function (error, data) {
    if (error) {
      process.stderr.write("Error: no such file or directory!");
      process.exit(9);
    }
    const shiftValue = getArgsValue("-s", "--shift");
    const actionValue = getArgsValue("-a", "--action");
    const newMessage = codeMessage(shiftValue, data, actionValue);
    writeInOutputFile(newMessage);
  });
};

module.exports = getDataFromInputFile;
