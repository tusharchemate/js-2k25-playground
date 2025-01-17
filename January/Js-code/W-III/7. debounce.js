const myDebounce = (fn, delay) => {
  let timer
  return function (...args) {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

const displayData = () => {
  console.log("hey")
}

myDebounce(displayData, 2000)()
