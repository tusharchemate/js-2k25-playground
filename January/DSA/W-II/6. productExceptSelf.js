const nums = [1, 2, 4, 6]

const productItSelf = (arr) => {
  let prodArr = []

  for (let i = 0; i < arr.length; i++) {
    let prod = 1

    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue

      prod *= arr[j]
    }
    prodArr.push(prod)
  }
  return prodArr
}

console.log(productItSelf(nums))
