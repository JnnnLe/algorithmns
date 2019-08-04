const sockMerchant = (n, arr) => {
  let totalByColor = {};
  let totalPairs = 0;
  for (let sock of arr) {
    !totalByColor[sock] ? totalByColor[sock] = 1 : totalByColor[sock]++
  }

  for (let pair in totalByColor) {
    if (parseInt(totalByColor[pair]) === 2) {
      totalPairs++;
    }
    if (parseInt(totalByColor[pair]) > 2) {
      let addValue = Math.floor(parseInt(totalByColor[pair]/2));
      totalPairs+= addValue;
    }
  }

  return totalPairs;
};


sockMerchant(9, [10,20, 20, 10, 10, 30, 50 ,10, 20]) // 3