const pushingZeros = (arr) => {
  let zeros = []
  let otherNums = [];
  for (let num of arr) {
    num == 0 ? zeros.push(num) : otherNums.push(num)
  }

  return otherNums = [...otherNums, ...zeros];  
}

console.log(pushingZeros([3,5,2,0,0,9,0,1]))