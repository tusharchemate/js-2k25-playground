function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1; 
  return n * factorialRecursive(n - 1); 
}

console.log(factorialRecursive(5)); 
