const getRange = (min, max) => {
  const list = [];
  for (let i = min; i <= max; i++) {
    list.push(i);
  }
  return list
}

const findSubstringInString = (str, sub) => {
  const substringFound = {
    subtext: '',
    result: []
  }
  const lowercaseStr = str.toLowerCase();
  const lowercaseSub = sub.toLowerCase();

  for (let i = 0; i < lowercaseStr.length - lowercaseSub.length + 1; i++) {
    substringFound.subtext = sub
    if (lowercaseStr[i] !== lowercaseSub[0]) continue; // Iterate until first character of substring matches current char in string
    let exists = true;

    for (let j = 1; j < lowercaseSub.length; j++) {
      if (lowercaseStr[i + j] === lowercaseSub[j]) continue; // Iterate through rest of sub string to see if it matches segment of the string
      exists = false;
    }

    if (exists) {
      substringFound.result.push(i + 1)
    };
  }

  substringFound.result = substringFound.result.length ?
    substringFound.result.join(', ')
    : '<No Output>'


  return substringFound;
}

module.exports = { getRange, findSubstringInString }
