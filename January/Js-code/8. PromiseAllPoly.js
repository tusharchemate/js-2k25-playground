const promiseAllPoly = (promiseArray) => {
  return new Promise((resolve, reject) => {
    let completedPromises = 0
    let res = []

    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        res[index] = value
        completedPromises++;
        if (completedPromises == promiseArray.length) return resolve(res)
      })
    })
  })
}

const promise1 = "2"
const promise2 = "3"

promiseAllPoly([promise1, promise2]).then((res) => {
  if (res) {
    console.log(res)
  }
})
