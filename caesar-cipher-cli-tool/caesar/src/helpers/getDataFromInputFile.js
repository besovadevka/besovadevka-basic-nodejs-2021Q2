const fs = require("fs");

const getDataFromInputFile = (index) => {
  const additionalIndexToGetInputFile = 3;
  const path = process.argv[index + additionalIndexToGetInputFile];
  fs.readFile(path, "utf8", function (error, data) {
    if (error) {
      process.stderr.write("Error: no such file or directory!");
      process.exit(9);
    }
    console.log(data);
  });
};

module.exports = getDataFromInputFile;
