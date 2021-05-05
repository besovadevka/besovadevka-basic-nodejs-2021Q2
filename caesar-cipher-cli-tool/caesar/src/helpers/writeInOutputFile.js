const fs = require("fs");
const getArgsValue = require("./getArgsValues");

const writeInOutputFile = (message) => {
  const outputFileName = getArgsValue("-o", "--output");

  fs.writeFile(outputFileName, message, function (error) {
    if (error) {
      process.stdout.write(message);
    }
  });
};

module.exports = writeInOutputFile;
