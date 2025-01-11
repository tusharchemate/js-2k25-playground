const promiseAll = (promiseArray) => {
  return new Promise((resolve, reject) => {
    let completed = 0
    let res = [];
    const total = promiseArray.length;

    promiseArray.forEach((promise, i) => {
      Promise.resolve(promise).then((val) => {
        res[i] = val
          completed += 1;
        if (completed == total)  resolve(res)
      })
    })
  })
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Error: Something get Wrong!!")
  }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Cool.. ")
  }, 2000)
})
 promiseAll([promise1, promise2]).then((res)=> console.log(res));
    
