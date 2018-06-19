function decodeString(s) {

  console.log("calling decodeString with: ", s)

  let newString = "";
  let sArr = s.split("");

  let prefixChars = "";
  let prefixNum = "";
  let decoded = "";

  for(let i=0; i<sArr.length; i++) {

    // if you hit the first "[", decode the string inside [], and stop looping
    if (sArr[i] === "[") {
      decoded = decodeString(s.slice(i+1, -1));
      break;
    }

    // if a character (before the first "[")
    else if (isNaN(sArr[i])) {
      prefixChars += sArr[i];

    // if a number (before the first "[")
    } else {
      prefixNum += sArr[i];
    }
  }

  // build decoded string
  newString += prefixChars;
  for (repeat=0; repeat < parseInt(prefixNum); repeat++) {
    newString += decoded;
  }

  return newString;
}

//console.log(decodeString("4[ab]")); //"abababab"
//console.log(decodeString("2[b3[a]]")); //"baaabaaa"
