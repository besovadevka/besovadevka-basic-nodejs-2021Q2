const getArgsValue = (shortArgName, argName) => {
  const indexOfArg =
    process.argv.indexOf(shortArgName) === -1
      ? process.argv.indexOf(argName)
      : process.argv.indexOf(shortArgName);
  return indexOfArg !== -1 ? process.argv[indexOfArg + 1] : null;
};

module.exports = getArgsValue;
