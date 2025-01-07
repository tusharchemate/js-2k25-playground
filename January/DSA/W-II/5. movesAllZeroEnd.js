const arr = [1, 0, 122, 43, 3, 0, 6]

const moveAllZeros = (arr) => {
  let lastIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i]
      arr[i] = arr[lastIndex]
      arr[lastIndex] = temp
      lastIndex++
    }
  }

  return arr
}

console.log(moveAllZeros(arr));
