/* Input: s = "racecar", t = "carrace"

Output: true */

const s = "racecar"
const t = "carrace"

isValidAnagram = (s, t) => {
  if (s.length !== t.length) return false

  // will count each string word
  const countS = {}
  const countT = {}

  for (let i = 0; i < s.length; i++) {
    countT[t[i]] = (countT[t[i]] || 0) + 1
    countS[s[i]] = (countS[s[i]] || 0) + 1
  }

  // will check both key are same or not
  for (let key in countT) {
    if (countT[key] !== countS[key]) return false
  }
  return true;
}

console.log(isValidAnagram(s, t))
