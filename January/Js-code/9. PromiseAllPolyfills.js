const promiseAllPolyfills = (promiseArray) => {
  return new Promise((resolve, rejected) => {
    let results = []
    let completedPromise = 0

    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise).then((val) => {
        results[index] = val
        completedPromise++

        if (completedPromise == promiseArray.length) resolve(results)
      })
    })
  })
}

const promise1 = "1";
const promise2 = "2";

promiseAllPolyfills([promise1, promise2])
  .then((results) => {
    console.log("Resolved values:", results); // Output: ['1', '2']
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
