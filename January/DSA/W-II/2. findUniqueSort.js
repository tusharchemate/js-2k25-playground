const arr = [0, 1, 2, 3, 3, 24, -24, 55, 88, 88]
const k = 2 //55

const topKthElement = (arr, k) => {
  const uniQ = []

  for (const i in arr) {
    if (!uniQ.includes(arr[i])) uniQ.push(arr[i])
  }

  for (let i in uniQ) {
    for (let j in uniQ) {
      if (uniQ[i] > uniQ[j]) {
        let temp = uniQ[i]
        uniQ[i] = uniQ[j]
        uniQ[j] = temp
      }
    }
  }

  return uniQ[k-1];
}

console.log(topKthElement(arr, k))
