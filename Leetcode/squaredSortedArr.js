const squaredSorted = (arr) => {
  let squaredSortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    squaredSortedArr.push(arr[i] * arr[i]);
  }
   return squaredSortedArr.sort((a,b) => a - b);
};


// using map method
const squaredSorted = (arr) => {
  return arr.map(item => (item * item)).sort((a,b) => a - b);
}


squaredSorted([-4,-1,0,3,10]);