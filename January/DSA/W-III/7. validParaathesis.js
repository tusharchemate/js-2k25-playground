const str = "(){}"

const validParanthesis = (str) => {
  let stack = []

  for (const char of str) {
    if (char == "(") stack.push(")")
    else if (char == "[") stack.push("]")
    else if (char == "{") stack.push("}")
    else if (stack.pop() !== char) {
      return false
    }
  }
  console.log(stack)
  return stack.length == 0
}

console.log(validParanthesis(str))
