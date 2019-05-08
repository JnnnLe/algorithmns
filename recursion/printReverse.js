const printReverseString = (str) => {
  if (str == '') {
    return str;
  } else {
  return printReverseString(str.substring(1)) + str[0];
  }
};