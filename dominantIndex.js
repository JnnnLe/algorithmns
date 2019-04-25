/**
 * @param {number[]} nums
 * @return {number}
 */

const dominantIndex = (arr) => {
  let max = arr[0];
  let index = 0;
  
// finding max and index
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

// comparing the values
let isDominant = index;
for (let i of arr) {
  if ( i !== max && i * 2 > max) {
    return isDominant = -1;
  }
}

return isDominant;
};


// Solution 2
const dominantIndex = (arr) => {
  let arrCopyForSort = [...arr];
  let sorted = arrCopyForSort.sort((a, b) => a - b);
  
  let max = sorted[sorted.length - 1];
  let secondMax = sorted[sorted.length - 2];
  let index;
  
  if (arr.length == 1) { return index = 0 }
  
  max >= (secondMax * 2) ? index = arr.indexOf(max) : index = -1
  
  return index;
}