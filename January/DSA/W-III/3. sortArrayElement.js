const arr = [1, 0, 2, 3, 4, 43, -1, 0, 0, 1]

const sortElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(sortElement(arr))
