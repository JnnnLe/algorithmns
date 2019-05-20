const validBraces = braces => {
  if (braces.length == 0) { return true }

  let pairs = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  };

  let s = braces.split('');

  for (let i = 0; i < s.length - 1; i++) {
    let curr = s[i];
    let next = s[i + 1];

    if (next == pairs[curr]) {
      s.splice(i, 2);
      return validBraces(s.join(''));
    }
  }

  if (s.join('').length > 0) { return false }
}


console.log(validBraces("([{}])"))
console.log(validBraces("[({})](]"))