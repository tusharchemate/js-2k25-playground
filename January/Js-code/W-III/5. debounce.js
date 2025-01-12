const myDebounce = (fn, delay) => {
 let timer;
 
  return function (...args) {
  clearTimeout(timer);
   timer = setTimeout(()=> {
   	fn.apply(this, args);
   }, delay);
  }
}

const debounceCall = () => {
  console.log("Called!")
}


const throttledLogScroll = myDebounce(debounceCall, 2000)

throttledLogScroll();
throttledLogScroll();
throttledLogScroll();
