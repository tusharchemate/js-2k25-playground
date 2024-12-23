function memoize(func) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log(`Cache hit for: ${n}`, n); // Log if it's a cache hit
      return cache[n];
    } else {
      console.log(`Cache miss for: ${n}`, n); // Log if it's a cache miss
      cache[n] = func(n);
      return cache[n];
    }
  };
} 


// Usage:
const factorial = memoize((n) => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // Cache miss for: 5
console.log(factorial(5)); // Cache hit for: 5
