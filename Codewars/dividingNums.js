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
  for (let i = 0; i < toStringThenSplitNum.length; i++) {
    // console.log(num, toStringThenSplitNum[i])
    if (num % toStringThenSplitNum[i] !== 0) {
      isTrue = false;
      return false;
    }  
  } return isTrue
}
 
// console.log(recursivelyMod(123));

const selfDividingNumbers = (left, right) => {
  let range = rangeFn(left, right); // returns range array
  let nums = [];
  for (let i = 0; i < range.length; i++) {
    if (recursivelyMod(range[i])) {
      nums.push(range[i]);
    }
  }

  return nums;
};

selfDividingNumbers(1, 22)