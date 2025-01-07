const memoizeFn = (fn) => {
  const cache = {}

  return function (...args) {
    const key = String(args)

    if (cache[key]) {
      console.log("cache", key)
      return cache[key]
    } else {
      let res = fn(...args)
      cache[key] = res
      console.log("computed ", res)
      return res
    }
  }
}

const sum = (a, b) => a + b

const memoiseSum = memoizeFn(sum)

console.log(memoiseSum(10, 10))
console.log(memoiseSum(10, 10))
console.log(memoiseSum(20, 10))
