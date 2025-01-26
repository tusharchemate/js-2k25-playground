/* Maximum Subarray Sum (Kadane’s Algorithm)
 */
const arr = [1, -3, 6, -3, 11, 1, -5, 4]

const maxSumArray = (arr) => {
  let maxSum = arr[0]
  let currSum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    
    maxSum = Math.max(maxSum, currSum)
  }

  return maxSum
}

console.log(maxSumArray(arr)) // Output: 15
