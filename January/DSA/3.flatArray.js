const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

const flatternArray = (arr) => {
  if (arr.length == 0) return arr
  let flatArray = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray.push(...flatternArray(arr[i]))
    } else {
      flatArray.push(arr[i])
    }
  }
  return flatArray
}

console.log(flatternArray(arr));
