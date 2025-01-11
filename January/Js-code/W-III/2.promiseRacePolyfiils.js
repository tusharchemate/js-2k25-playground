const promiseRace = (promiseArray) => {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject)
    })
  })
}


const promise1 = new Promise((resolve, reject)=>{
	setTimeout(()=> {
    	reject('Error: Something get Wrong!!')
    }, 3000)
})


const promise2 = new Promise((resolve, reject)=>{
	setTimeout(()=> {
    	resolve('Cool.. ')
    }, 2000)
})


promiseRace([promise1, promise2]).then((res)=> console.log(res)).catch((errr)=> 
console.log(errr));
