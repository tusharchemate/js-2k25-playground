const promiseRace = (promiseArr) => {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve) // Resolve as soon as any promise resolves
        .catch(reject) // Reject as soon as any promise rejects
    })
  })
}

const p2 = new Promise((_, reject) =>
  setTimeout(() => {
    reject("heyy")
  }, 60),
)

const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Resolved P3"), 50),
)

promiseRace([p3, p2])
  .then((resolve) => console.log("Race resolved with:", resolve))
  .catch((error) => console.error("Race rejected with:", error))
