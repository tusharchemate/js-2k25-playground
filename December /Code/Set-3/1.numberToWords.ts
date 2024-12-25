const numberToWords = (num: number): string => {
  const digitWords: string [] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let result : string = "";

  for (const digit of String(num)) {
    result += digitWords[parseInt(digit)];
  }

  return result;
};

const number = "012345"; 
console.log(numberToWords(number)); 
