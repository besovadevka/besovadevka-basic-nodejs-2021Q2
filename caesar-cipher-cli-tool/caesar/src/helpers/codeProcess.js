const getArgsValue = require("./getArgsValues");
const codeMessage = require("./codeInputFile");
const writeInOutputFile = require("./writeInOutputFile");

const codeProcess = (data) => {
  const shiftValue = getArgsValue("-s", "--shift");
  const actionValue = getArgsValue("-a", "--action");
  const newMessage = codeMessage(shiftValue, data, actionValue);
  writeInOutputFile(newMessage);
};

module.exports = codeProcess;
