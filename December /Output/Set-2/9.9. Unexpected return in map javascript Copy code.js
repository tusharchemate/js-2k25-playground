const arr = [1, 2, 3];

const result = arr.map((x) => {
  x * 2;
});

console.log(result);  // 3 times undefined

//Explanation: The function does not have an explicit return, so it returns undefined by default.


