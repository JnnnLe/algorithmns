const pickPeaks = arr => {
  console.log('Input:', arr)
  let final = {
    pos: [],
    peaks : []
  };

  if (arr.length == 0) { return final }

  for (let i = 1; i < arr.length - 1; i++) {
    let prev = arr[i - 1];
    let curr = arr[i];
    let next = arr[i + 1];
    
    if (prev == curr == next) {
      final.peaks.push(curr);
      final.pos.push(i - 2);
    }
    
    if (curr > prev && curr > next) {
      final.pos.push(i);
      final.peaks.push(curr);
    }

  }

  return final;
}


// ideas: helper fn to find:
  //   if plateau exists and where?
  //  push values and find a way to skip iteration there