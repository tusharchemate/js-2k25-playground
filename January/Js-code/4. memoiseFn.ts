const memoiseFn = (fn) => {
  const cache = {};
  return function(...args) {
    let key = String(args);
    if(key in cache) {
    	console.log('Cached Key', key);
    	return cache[key];
    } else {
    	const res = fn(...args);
      cache[key] = res;
      return cache[key];
    }
  }	
}

const sum = (a,b) => a + b;

const memoiseSum = memoiseFn(sum);
const res1 = memoiseSum(10,10);
const res2 = memoiseSum(10,10);

console.log(res1);
console.log(res2);
