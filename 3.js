function changePossibilities(amount, denominations) {
  let count = 0;

  denominations.sort();

  console.log(denominations)

  for(let i=0; i<denominations.length; i++) {
    let difference = amount - denominations[i];

    for(let end=denominations.length - 1; end>=0; end--) {
      if(denominations[end] < difference) {
        //something
      }
    }

  }

  return count;
}

console.log(changePossibilities(4, [1, 2, 3])) // 4
