/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const rangeFn = (left, right) => {
  let nums = [];
  for (let i = left; i <= right; i++) {
      nums.push(i);
  }
  
  return nums;
};

const recursivelyMod = (num) => {
  let toStringThenSplitNum = num.toString().split('');
  let isTrue = true;
  for (let i = 0; i <= toStringThenSplitNum; i++) {
      if (num % parseInt(toStringThenSplitNum[i]) !== 0) {
          return isTrue = false;
      }
  }
  
  return isTrue;
}


const selfDividingNumbers = (left, right) => {
  let range = rangeFn(left, right);
  let nums = [];
  for (let i = range[i]; i < range.length; i++) {
      if (range[i] < 10) {
          nums.push(range[i])
      } else if (recursivelyMod(range[i])) {
          if (true) {
              nums.push(range[i]);
          }
      
      }
  }
  return nums;
};