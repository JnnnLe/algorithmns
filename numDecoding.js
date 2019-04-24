const numDecodings = num => {
  let count = 0;
  let splitNum = num.toString().split('');
  let eachNumCheck = splitNum.filter(num => num > 0 && num < 27);
  // console.log('EACH NUM:', eachNumCheck);

  if (splitNum[0] == 0 || splitNum[splitNum.length - 1] == 0) {
    console.log('zero.');
    return count = 0;
  }

  // if (splitNum.includes('0')) {
  //   return count = 0;
  // }

  if (num < 10) { 
    return count = 1;
  }

  if (num > 9 && num < 27 && !(splitNum.includes('0'))) { 
    console.log('First condition', splitNum.includes('0'));
    count++;  

    if (eachNumCheck.length == splitNum.length) {
      count++;
      console.log('2nd if', eachNumCheck, eachNumCheck.length, count);
    }

  }  else {
    if (eachNumCheck.length == splitNum.length) {
      count++;
      console.log('3rd if', count);
    }

    for (let i = 0; i < splitNum.length - 1; i++) {
    // console.log('LOOK:',  (splitNum[i] + splitNum[i + 1]))
      if (splitNum[i] == 0 || (splitNum[i] + splitNum[i + 1]) > 26 || (splitNum[i] + splitNum[i + 1]) == NaN) {
        console.log('Inside bad condition', count, (splitNum[i] + splitNum[i + 1]))
        return count;
      }
      console.log('Out', count)
      count++;
    }
  }

  return count;
};

numDecodings(227);const numDecodings = num => {
  let count = 0;
  let splitNum = num.toString().split('');
  let eachNumCheck = splitNum.filter(num => num > 0 && num < 27);
  // console.log('EACH NUM:', eachNumCheck);

  if (num == 10) {
    return count = 1;
  }
    
  if (splitNum[0] == 0) {
    console.log('zero.');
    return count = 0;
  }
    
  if (num % 100 == 0) {
      return count = 0;
  }

  if (num < 10) { 
    return count = 1;
  }

  if (num > 9 && num < 27 && !(splitNum.includes('0'))) { 
    console.log('First condition', splitNum.includes('0'));
    count++;  

    if (eachNumCheck.length == splitNum.length) {
      count++;
      console.log('2nd if', eachNumCheck, eachNumCheck.length, count);
    }

  }  else {
    if (eachNumCheck.length == splitNum.length) {
      count++;
      console.log('3rd if', count);
    }

    for (let i = 0; i < splitNum.length - 1; i++) {
    
      if ((splitNum[i] + splitNum[i + 1]) % 10 == 0) {
          count--;
      }
    // console.log('LOOK:',  (splitNum[i] + splitNum[i + 1]))
      if (splitNum[i] == 0 || (splitNum[i] + splitNum[i + 1]) > 26 || (splitNum[i] + splitNum[i + 1]) == NaN) {
        console.log('Inside bad condition', count, (splitNum[i] + splitNum[i + 1]))
        return count;
      }
      console.log('Out', count)
      count++;
    }
  }

  return count;
};

// Passed 179/258
// Current case: I: 101, O:0 E:, 1