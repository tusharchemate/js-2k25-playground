function memoiseFn(fn) {
const cache = {};

  return function (...args) {
    const key = JSON.stringify(args); // Use JSON.stringify for a unique key representation
    if (key in cache) {
      console.log('cache in key', key);
      return cache[key]; // Return cached value
    } else {
      const result = fn(...args); // Compute the result
      cache[key] = result; // Cache the result
      return result;
    }
}
 
}

const sum = (a,b)=> {
	return a+b
}

const memoizedSum = memoiseFn(sum);

const a = memoizedSum(2, 3); 
const b = memoizedSum(2, 3); 
const c = memoizedSum(4, 5);

console.log(`Result of a: ${a}`); 
console.log(`Result of b: ${b}`);
console.log(`Result of c: ${c}`);







