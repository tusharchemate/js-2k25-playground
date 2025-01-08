const strs = ["act", "pots", "tops", "cat", "stop", "hat"]

const groupAnagrams = (arr) => {
  const anagramMap = {}

  for (const item of arr) {
    const sortedStr = item.split("").sort().join("")

    if (!anagramMap[sortedStr]) {
      anagramMap[sortedStr] = []
    }
    anagramMap[sortedStr].push(item)
  }

  return Object.values(anagramMap)
}

console.log(groupAnagrams(strs))

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
