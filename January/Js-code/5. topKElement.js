const arr = ["2", "1", 0, 1, 3, 3]

const topKElemenets = (arr, k) => {
  if (arr.length < 2) return arr

  const countMap = {}

  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1
  }

  const freQ = Object.entries(countMap)
  const a = freQ.sort((a, b) => b[1] - a[1])

  return freQ.slice(0, k).map((el) => +el[0])
}

console.log(topKElemenets(arr, 2))
