// check string is palindrome or not

const str = "Mam"

const isStringPalindrome = (inputStr) => {
  let rev = ""

  for (let i = inputStr.length - 1; i >= 0; i--) {
    rev += inputStr[i]
  }

  return rev.toLowerCase() === inputStr.toLowerCase()
}

console.log(isStringPalindrome(str))
