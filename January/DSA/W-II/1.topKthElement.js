const arr = [0, 1, 2, 3, 3, 24, 11, 24, 55, 88, 88]
const k = 2 //55

const topKthElement = (arr, k) => {
  const uniqueElements = []

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) uniqueElements.push(arr[i])
  }

  for (let i = 0; i < uniqueElements.length; i++) {
    for (let j = i + 1; j < uniqueElements.length; j++) {
      if (uniqueElements[i] < uniqueElements[j]) {
        let temp = uniqueElements[i]
        uniqueElements[i] = uniqueElements[j]
        uniqueElements[j] = temp
      }
    }
  }

  return uniqueElements[k - 1]
}

console.log(topKthElement(arr, k))
