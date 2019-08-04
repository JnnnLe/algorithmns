const dailyTemperatures = (temps) => {
  let final = [];
  
  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    let dayCount = 1;

    for (let j = i + 1; j < temps.length; j++) {
      if (temps[j] > currentTemp) {

        // only push under the condition that you haven't push for i-iteration before
        if (final.length == (i)) {
          final.push(dayCount);
        } 
      }

      // condition in hopes to find a warmer day
      dayCount++;

      // if you hit the end of loop and no such temp was found, input value 0
      if (final.length == (i) && j == temps.length - 1) {
        final.push(0);
      }

    };
  }
  
  //final day, end of time
  final.push(0);
  return final;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))