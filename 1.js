function sortByStrings(s, t) {
  let newString = "";

  for(let i=0; i<t.length; i++) {
    for(let j=0; j<s.length; j++) {

      // if matching char is found in s
      if(s[j] === t[i]) {

        // add the letter to the new string
        newString += t[i];
      }
    }
  }

  return newString;
}

//console.log(sortByStrings("good", "odg"))
//console.log(sortByStrings("weather", "therapyw"));
