const alphabetPosition = text => {
  // console.log('Text:', text);
  
    let alphabet = {};
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < letters.length; i++) {
      alphabet[letters[i]] = i + 1;
    }
    
    let final = []; 
    let tArr = text.toLowerCase().split(" ").join("").split("");
    for (let i = 0; i < tArr.length; i++) {
      console.log('Each letter:', tArr[i])
      if (alphabet[tArr[i]]) {
        final.push(alphabet[tArr[i]]);
      }
    }
    
    return final.join(' ');
  }

console.log(alphabetPosition('This is a test.'));