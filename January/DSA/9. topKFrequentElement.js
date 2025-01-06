const topK = [1, 2, 25, 55, 55, 55, 55, 4, 4, 3, 4, 4, 4, 4, 3, 4]

const topKFrequentElement = (nums, k) => {
  if (nums.length == 0) return nums

  let map = {}

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1
  }

  const feqMap = Object.entries(map)

  feqMap.sort((a, b) => b[1] - a[1])

  let res = []

  for (let i = 0; i < k; i++) {
    res.push(feqMap[i])
  }

  return res.map((a) => Number(a[0]))
}

console.log(topKFrequentElement(topK, 4))
