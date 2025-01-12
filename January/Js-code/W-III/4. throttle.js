const myThrottle = (fn, delay) => {
  let lastCall = 0
  return function (...args) {
    let now = Date.now()

    if (now - timeout >= delay) {
      lastCall = now
      fn(...args)
    }
  }
}

const logScroll = () => {
  console.log("Scrolled!")
}

const throttledLogScroll = myThrottle(logScroll, 2000)

window.addEventListener("scroll", throttledLogScroll)
