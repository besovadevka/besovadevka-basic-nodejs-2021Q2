const fs = require("fs");
const { pipeline, Transform } = require("stream");
const codeMessage = require("./codeInputFile");
const getArgsValue = require("./getArgsValues");

const getReadStream = (path) => {
  if (path) {
    const readStream = fs.createReadStream(path);
    readStream.on("error", () => {
      process.stderr.write("Error: no such file or directory!");
      process.exit(9);
    });
    return readStream;
  } else {
    process.stdout.write("Enter message:\n");
    return process.stdin.once("data", () => process.stdin.unref());
  }
};

const getTransformStream = (shiftValue, actionValue) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      process.stdout.write("Data is written\n");
      this.push(codeMessage(shiftValue, chunk.toString(), actionValue));
      callback();
    },
  });
};

const getWriteStream = (path) => {
  if (path) {
    return fs.createWriteStream(path, { flags: "a" });
  } else {
    return process.stdout;
  }
};

const getDataFromInputFile = () => {
  const pathName = getArgsValue("-i", "--input");
  const outputFileName = getArgsValue("-o", "--output");
  const shiftValue = getArgsValue("-s", "--shift");
  const actionValue = getArgsValue("-a", "--action");

  pipeline(
    getReadStream(pathName),
    getTransformStream(shiftValue, actionValue),
    getWriteStream(outputFileName),
    (error) => {
      console.log(error);
      if (error) {
        process.stdout.write("Error: Something went wrong! Try again");
        process.exit(1);
      }
    }
  );
};

module.exports = getDataFromInputFile;
