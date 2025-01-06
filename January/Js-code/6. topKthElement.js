const arr = [0, 1, 2, 3, 3, 24, 11, 24]
const k = 2 //2

const topKthElement = (arr, k) => {
  const uniqueElement = new Set(arr)
  const arr1 = [...uniqueElement]

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] < arr1[j]) {
        // Swap elements
        let temp = arr1[i]
        arr1[i] = arr1[j]
        arr1[j] = temp
      }
    }
  }

  return arr1[k - 1]
}

console.log(topKthElement(arr, k))
