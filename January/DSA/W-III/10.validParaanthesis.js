const str = "([]{})"

const validParanthesis = (arr) => {
  let stack = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") {
      stack.push(")")
    } else if (arr[i] == "[") {
      stack.push("]")
    } else if (arr[i] == "{") {
      stack.push("}")
    } else if (stack.length == 0 || stack.pop() != arr[i]) return false
  }

  return stack.length === 0
}

console.log(validParanthesis(str))


--- 2 ---


var isValid = function (s) {
    const stack = []
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (const char of s) {
        if (char in brackets) {
            stack.push(char);
        } else { 
            if (stack.length === 0 || brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0
};
