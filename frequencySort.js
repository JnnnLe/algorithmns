const gatheringCountOfLetters = str => {
  let letters = str.split("");
  let collection = {};
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    collection[letter] ? collection[letter] = collection[letter] + 1 : collection[letter] = 1;
  }
  return collection;
}

const frequencySort = str => {
  let collection = gatheringCountOfLetters(str);
  let keysAndValuesArr = [];
  let final = [];

  keysAndValuesArr = Object.entries(collection);
  keysAndValuesArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < keysAndValuesArr.length; i++) {
    final.push((keysAndValuesArr[i][0].repeat(keysAndValuesArr[i][1])))
  }

  return final.join('');
};