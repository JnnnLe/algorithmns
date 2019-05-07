/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = (str) => {
  let splitStr = str.split(' ');
  let final = [];
  let aCount = 2;
  let a = 'a';
  
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  for (let i = 0; i < splitStr.length; i++) {
    
    if (vowels.has(splitStr[i][0])) {
      final.push(splitStr[i] + 'm' + a.repeat(aCount));
      aCount++; 
      
    } else {
    
    let splitWord = splitStr[i].split('');
    let firstLetter = splitWord.shift(); 
    let joinedWord = splitWord.join('')
    final.push(joinedWord + firstLetter + 'm' + a.repeat(aCount));
    aCount++;
    }
  }
  
  return final.join(' ');
};