const alp = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const getNewIndexDecode = (charIndex, shift) => {
  const indexShift = charIndex - shift;
  let newIndex;
  if (indexShift >= alp.length) {
    newIndex = indexShift % alp.length;
  } else {
    newIndex = indexShift >= 0 ? indexShift : alp.length + indexShift;
  }
  return newIndex;
};

const getNewIndexEncode = (charIndex, shift) => {
  const indexShift = charIndex + shift;
  let newIndex;
  if (shift < 0) {
    newIndex = indexShift >= 0 ? indexShift : alp.length + indexShift;
  } else {
    newIndex = indexShift >= alp.length ? indexShift % alp.length : indexShift;
  }
  return newIndex;
};

const convertData = (shift, str, code) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const isCharLower = str[i].toLowerCase() === str[i];
    const currentShift = Math.trunc(shift) % alp.length;
    const charIndex = alp.indexOf(str[i].toLowerCase());
    const newIndex =
      code === "decode"
        ? getNewIndexDecode(charIndex, currentShift)
        : getNewIndexEncode(charIndex, currentShift);
    res +=
      charIndex + 1
        ? isCharLower
          ? alp[newIndex]
          : alp[newIndex].toUpperCase()
        : str[i];
  }
  return res;
};

module.exports = convertData;
