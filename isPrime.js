const isPrime = num => {
  let result = true;
  if (num < 2) return false;
  if (num == 2 || num == 3) return true;
  
  for (let i = Math.ceil(Math.sqrt(num)); i >= 2; i--) {
    if (num % i === 0) return result = false;
  }
  
  return result;
}
