const promiseRacePolyfills = <T>(promiseArray: Array<Promise<T> | T>): Promise<T> => {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
};

const promise1 = new Promise<string>((_, reject) => {
  setTimeout(() => {
    reject("Error::: Please Check the code!");
  }, 1000);
});

promiseRacePolyfills([promise1])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
