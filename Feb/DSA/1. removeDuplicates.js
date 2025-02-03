// remove duplicates
const removeDuplicates = (arr) => {
  const uninQ = []

  for (let i = 0; i < arr.length; i++) {
    if (!uninQ.includes(arr[i])) {
      uninQ.push(arr[i])
    }
  }

  return uninQ
}

console.log(removeDuplicates([1, 1, 11, -1, 1, 0, 00, 12, 2]))
