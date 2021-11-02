const fs = require("fs");
const path = require("path");
const { pipeline, Transform } = require("stream");
const convertData = require("./encryptData.js");
const { validatePath } = require("./validation.js");

const getReadStream = (inputPath) => {
  if (inputPath) {
    const readStreamFilePath = path.resolve(inputPath);
    return fs.createReadStream(readStreamFilePath);
  } else {
    process.stdout.write("Enter message:\n");
    return process.stdin.on("data", () =>
      setImmediate(() =>
        process.stdout.write("Enter new message or 'Ctrl + C' to exit:\n")
      )
    );
  }
};

const getTransformStream = (shiftValue, actionValue) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      process.stdout.write("Data is written.\n");
      this.push(convertData(shiftValue, chunk.toString(), actionValue));
      callback();
    },
  });
};

const getWriteStream = (outputPath) => {
  if (outputPath) {
    const writeStreamFilePath = path.resolve(outputPath);
    return fs.createWriteStream(writeStreamFilePath, { flags: "a" });
  } else {
    return process.stdout;
  }
};

const getProcessedData = (
  shiftValue,
  actionValue,
  inputPathName,
  outputPathName
) => {
  process.stdout.write("Welcome to CLI Caesar cipher!\n");
  validatePath(inputPathName);
  validatePath(outputPathName);

  pipeline(
    getReadStream(inputPathName),
    getTransformStream(shiftValue, actionValue),
    getWriteStream(outputPathName),
    (error) => {
      if (error) {
        process.stderr.write("Error: Something went wrong! Try again");
        process.exit(1);
      }
    }
  );
};

module.exports = getProcessedData;
