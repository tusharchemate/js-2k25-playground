const arr = [[1, 2, [4]], 5, 6, 66, 6, [88]]

const flaternArray = (arr) => {
  let flatArr = []

  for (const num of arr) {
    if (Array.isArray(num)) {
      flatArr.push(...flaternArray(num))
    } else {
      flatArr.push(num)
    }
  }

  return flatArr
}

console.log(flaternArray(arr))
