const promiseRace = (promiseArray) => {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    })
  })
}

const p1 = new Promise((resolve, reject)=> {	
	resolve('Hey');
})

const p2 = new Promise((resolve, reject)=> {	
	resolve('Hey');
})

promiseRace([p1, p2]).then((res)=> {
  console.log(res); 
});
