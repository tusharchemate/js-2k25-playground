// remove duplicate from array

const arr = [1, 1, 11, 1, 1, 1, 1, 1, 13, 2, 2, 2, 2, 34, 33, 44]

const removeDuplicates = (arr) => {
  let uniQ = []

  for (const el of arr) {
    if (!uniQ.includes(el)) {
      uniQ.push(el)
    }
  }

  return uniQ
}

console.log(removeDuplicates(arr))
