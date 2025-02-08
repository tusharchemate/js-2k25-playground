// program to find longest word in a string

const str = "Tusr sssas chs";

const findLongestWordInStr = (inputStr) => {
  const words = inputStr.split(' '); 
  let longestStr = "";

  for (const word of words) {
    if (longestStr.length < word.length) {
      longestStr = word;
    }
  }

  return longestStr;
};

console.log(findLongestWordInStr(str));
