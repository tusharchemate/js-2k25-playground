const myDebounce = (fn, delay) => {
  let timer; // Keep the timer reference outside the returned function
  return function (...args) {
    clearTimeout(timer); // Clear the previous timer
    timer = setTimeout(() => {
      fn.apply(this, args); // Call the original function after the delay
    }, delay);
  };
};

const debounceCall = () => {
  console.log("Called!");
};

const debouncedFunction = myDebounce(debounceCall, 2000);

// Simulating multiple calls
debouncedFunction();
debouncedFunction();
debouncedFunction();
