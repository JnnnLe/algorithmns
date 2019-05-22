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
    
    if (prev == curr && curr == next) {
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


/*
VALID SOLUTION:

const  pickPeaks = arr => {
  let obj = { pos:[], peaks:[] };
  for (let i = 1; i < arr.length-1; i++) {
  	//if the current number is higher than previous and higher than the next one, it's the peak
  	if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
  		obj.pos.push(i);
  		obj.peaks.push(arr[i]);
  	//if current number is higher than the previous and equal to the next
  	} else if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
	  	//save the position and value of this in a temporary variable
	  	let temp = [];
	  	temp.push(i);
	  	temp.push(arr[i]);
	  	console.log('Temp:', temp);
	  	//check the next one to see if it's higher than the one after, equal to the next one, or higher than the previous one
	  	for (let j = i+1; j < arr.length-1; j++) {
	  	//if it is higher than the next one, return the saved first repeating number
	  	//3,3,4,5,3
	  		if (arr[j] > arr[j+1]) {
	  			obj.pos.push(temp[0]);
	  			obj.peaks.push(temp[1]);
	  			break;
	  		} else if (arr[j] < arr[j+1]) {
	  			//if the next one is higher, break out
	  			break;
	  		} 
	  	}
  	}
  }
  return obj;
};


console.log(pickPeaks([ 2, 1, 3, 1, 2, 2, 2, 2 ]
  [ 4, 2 ]))
  */