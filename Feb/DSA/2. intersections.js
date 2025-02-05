const arr1 = [1, 1, 2, 3, 4, 4, 4, 4]
const arr2 = [2, 2, 2, 44, 4, 4]

const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1)
  const result = []

  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num)
      set1.delete(num)
    }
  }

  return result
}

console.log(intersection(arr1, arr2))
