const arr = [1, 2, 3, 4, 5, 6, 9]

const val = 15

const binarySearch = (arr, t) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) return i
  }

  return -1
}

console.log(binarySearch(arr, val))
