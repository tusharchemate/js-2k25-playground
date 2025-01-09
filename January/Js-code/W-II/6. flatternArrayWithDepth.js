const arr = [1, 2, "tushar", [[[[[[[[[[[[[55, "Tush"]]]]]]]]]]]]]]

const flatternArrayWithDepth = (arr, depth = Infinity) => {
  const flatArray = []

  for (let key of arr) {
    if (Array.isArray(key) && depth > 0) {
      flatArray.push(...flatternArrayWithDepth(key, depth - 1))
    } else {
      flatArray.push(key)
    }
  }

  return flatArray
}

console.log(flatternArrayWithDepth(arr))
console.log(flatternArrayWithDepth(arr, 10))
console.log(flatternArrayWithDepth(arr, 14))
