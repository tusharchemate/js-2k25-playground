const binarySearch = (arr, target) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (arr[mid] == target) return mid
    else if (arr[mid] < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

const numbers = [1, 3, 5, 7, 9, 11]
console.log(binarySearch(numbers, 5)) // Output: 2
console.log(binarySearch(numbers, 6)) // -1
