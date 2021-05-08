const validateShift = (shiftValue) => {
  if (!shiftValue) {
    process.stderr.write(
      "Error: Shift is missed! Try again with -s or --shift"
    );
    process.exit(9);
  }
  if (+shiftValue !== +shiftValue) {
    process.stderr.write(
      "Error: Shift value is missed! Try again with a number"
    );
    process.exit(9);
  }
};

const validateAction = (actionValue) => {
  if (!actionValue) {
    process.stderr.write(
      "Error: Action is missed! Try again with -a or --action"
    );
    process.exit(9);
  }
  if (actionValue !== "encode" && actionValue !== "decode") {
    process.stderr.write(
      "Error: Action value is missed! Try again with encode or decode values"
    );
    process.exit(9);
  }
};

const validateRequireArguments = (shift, action) => {
  validateShift(shift);
  validateAction(action);
};

module.exports = validateRequireArguments;
