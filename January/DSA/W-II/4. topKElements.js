const nums = [1, 2, 2, 3, 3, 3]
const k = 2

const topKFrequent = (nums, k) => {
  if (nums.length <= 1) return nums

  const countMap = {}
  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1
  }

  console.log(countMap)
  const freQ = Object.entries(countMap).sort((a, b) => b[1] - a[1])

  return freQ.slice(0, k).map((el) => Number(el[0]))
}

console.log(topKFrequent(nums, k))
