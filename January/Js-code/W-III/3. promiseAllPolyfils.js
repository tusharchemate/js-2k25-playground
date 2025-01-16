const promiseAllPolyfills = (promiseArr) => {
  return new Promise((reslove, reject) => {
    let comp = 0
    let res = []
    promiseArr.forEach((promise, i) => {
      Promise.resolve(promise).then((val) => {
        res[i] = val
        comp += 1

        if (comp == promiseArr.length) reslove(res)
      })
    })
  })
}

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hey")
  }, 100)
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Heyii")
  }, 100)
})

promiseAllPolyfills([p1, p2]).then((res) => console.log(res))
