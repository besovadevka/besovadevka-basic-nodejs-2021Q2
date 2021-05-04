const validateShift = (sArg, shiftArg, sValue, shiftValue) => {
  if (sArg === -1 && shiftArg === -1) {
    process.stderr.write(
      "Error: Shift is missed! Try again with -s or --shift"
    );
    process.exit(9);
  }
  if (
    (sArg !== -1 && +sValue !== +sValue) ||
    (shiftArg !== -1 && +shiftValue !== +shiftValue)
  ) {
    process.stderr.write(
      "Error: Shift value is missed! Try again with a number"
    );
    process.exit(9);
  }
};

const validateAction = (aArg, actionArg, aValue, actionValue) => {
  if (aArg === -1 && actionArg === -1) {
    process.stderr.write(
      "Error: Action is missed! Try again with -a or --action"
    );
    process.exit(9);
  }
  if (
    (aArg !== -1 && aValue !== "encode" && aValue !== "decode") ||
    (actionArg !== -1 && actionValue !== "encode" && actionValue !== "decode")
  ) {
    process.stderr.write(
      "Error: Action value is missed! Try again with encode or decode values"
    );
    process.exit(9);
  }
};

const validateInputFile = (iFileIndex, inputFileIdex) => {
  if (iFileIndex === -1 && inputFileIdex === -1) {
    process.stdout.write("Enter path to input file\n");
    process.stdin.setEncoding("utf8");
    process.stdin.on("readable", function () {
      const chunk = process.stdin.read();
      if (chunk !== null) {
        process.argv.push("-i", chunk);
      }
    });
    process.stdin.on("end", function () {
      process.stdout.write("end");
    });
  }
};

const validateArguments = (args) => {
  validateShift(
    args.indexOf("-s"),
    args.indexOf("--shift"),
    args[args.indexOf("-s") + 1],
    args[args.indexOf("--shift") + 1]
  );
  validateAction(
    args.indexOf("-a"),
    args.indexOf("--action"),
    args[args.indexOf("-a") + 1],
    args[args.indexOf("--action") + 1]
  );
  validateInputFile(args.indexOf("-i"), args.indexOf("--input"));
};

module.exports = validateArguments;
