const s = "[{}]"

const isValid = (s) => {
  const stack = []
  // will create a map
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  
  // will iterate over a string
  
  for(char of s) {
  	
    if(map[char]) {
    	stack.push(map[char]);
    } else if(stack.pop() != char) {
    	return false;
    }
  }
  
  return stack.length == 0;
  
  
}

console.log(isValid(s))
