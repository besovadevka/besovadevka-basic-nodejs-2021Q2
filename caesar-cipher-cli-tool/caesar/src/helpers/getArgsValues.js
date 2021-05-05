const getArgsValue = (shortArgName, argName) => {
  const indexOfArg =
    process.argv.indexOf(shortArgName) === -1
      ? process.argv.indexOf(argName)
      : process.argv.indexOf(shortArgName);

  return process.argv[indexOfArg + 1];
};

module.exports = getArgsValue;
