const str = ["flowerr", "flaw", "flight"]

const longestCommonPrefix = (strs) => {
  let sortedStr = strs.sort()
  
  let first = sortedStr[0]
  let last = sortedStr[sortedStr.length - 1]

  let prefix = "";

  for (let i = 0; i < sortedStr.length; i++) {
    if (first[i] !== last[i]) break;
    prefix += first[i]
  }

  return prefix
}

console.log(longestCommonPrefix(str))
