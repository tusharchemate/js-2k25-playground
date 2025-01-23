const arr = [-2, 1, -3, 4, -1, 2, 1,8, -5, 4, -1, 99]

const maxSubarraySum = (arr) => {
  let maxSum = -Infinity
  let currentMax = 0

  for (let i = 0; i < arr.length; i++) {
    currentMax += arr[i]

    if (currentMax > maxSum) {
      maxSum = currentMax
    }

    if (currentMax < 0) {
      currentMax = 0
    }
  }

  return maxSum // 111
}

console.log(maxSubarraySum(arr))
