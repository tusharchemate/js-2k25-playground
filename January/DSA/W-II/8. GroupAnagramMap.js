const strs = ["act", "pots", "tops", "cat", "stop", "hat"]

const groupAnagrams = (arr) => {
  const anagramMap = new Map()

  for (const item of arr) {
    const sortedStr = item.split("").sort().join("")

    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, [])
    }
    anagramMap.get(sortedStr).push(item)
  }

  return Array.from(anagramMap.values())
}

console.log(groupAnagrams(strs))

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
