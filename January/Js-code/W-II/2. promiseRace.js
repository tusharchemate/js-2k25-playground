const promiseRacePolyfills = (promiseArray) => {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject)
    })
  })
}

const promise2 = new Promise((_, reject)=> {
	setTimeout(()=> {
    	reject('Rejected.')
    },1000)
})
const promise1 = new Promise((resolve, reject)=> {
	setTimeout(()=> {
    	resolve('Hey Dude..')
    },1000)
})



promiseRacePolyfills([promise1, promise2]).then((res)=> console.log(res)).catch((err)=>
console.log(err))

