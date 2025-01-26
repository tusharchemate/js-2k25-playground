const str = "{}[[[[{]]]]"

const isValid = (s) => {

  let stack = []

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  }

  for (let char of s) {
    if (brackets[char]) {
      stack.push(char)
    } else {
      if (stack.length === 0 || brackets[stack.pop()] != char) {
        return false
      }
    }
  }

  return stack.length == 0
}

console.log(isValid(str))
