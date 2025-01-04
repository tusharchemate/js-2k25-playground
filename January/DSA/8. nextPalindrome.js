const isPalindrome = (num) => {
    let numStr = num.toString();
    let reversedStr = "";
    
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }
    
    return reversedStr === numStr;
}

const nextPalindrome = (num) => {
    num++;  // Start by checking the next number
    while (!isPalindrome(num)) {
        num++;  // Increment until a palindrome is found
    }
    return num;
}

console.log(nextPalindrome(11));  // Output: 22
