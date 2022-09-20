function reverseString(str) {
  let wrd = "";

  for (let index = str.length - 1; index > -1; --index) {
    wrd = wrd + str[index];
    console.log(wrd);
    console.log(index);
  }
  return wrd;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// get length of string - 1
// slice last letter of string to new array
// repeat until length is 0
// join new array into a string
// return sring

// And a written explanation of your solution
