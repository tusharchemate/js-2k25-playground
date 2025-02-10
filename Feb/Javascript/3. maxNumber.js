const arr = [10, 5, 20, 15, 30];

const maxNumber = arr.reduce((max, current) => {
  return max > current ? max : current;
}, arr[0]); // Initialize with the first element

console.log(maxNumber); // Output: 30
