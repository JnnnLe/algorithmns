const whoIsNext = (names, r) => {
  let sodaCount = 0;
  
  while (sodaCount < r) {
    for (let i = 0; i < r; i++) {
      sodaCount++;
      let sodaGivenTo = names[0];
      names.push(sodaGivenTo, sodaGivenTo);
      names.splice(0, 1);
    }
  }

  return names[names.length - 1];
};

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"