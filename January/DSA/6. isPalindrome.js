const isPalindrome = (s) => {
  const str = s.toLowerCase().replace(/[^0-9a-z]/g, "")
  let reverseStr = ""

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }

  return reverseStr === str
}

console.log(isPalindrome("Was it a car or a cat I saw"))
