const palindrome = (str) => {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev === str;
};

const nextPalindrome = (num) => {
  num = parseInt(num); 
  num++;

  while (!palindrome(num.toString())) {
    num++;
  }

  return num;
};

console.log(nextPalindrome(11111)); 
