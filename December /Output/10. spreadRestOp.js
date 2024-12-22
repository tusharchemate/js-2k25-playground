const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;

console.log(a);   // ? 1
console.log(rest); // ? bc
    
