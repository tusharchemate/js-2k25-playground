const arr: number[] = [1, 2, 4, 5, 0, 7];

// Function to move all non-zero elements to the beginning of the array
const nonZeroAtEnd = (arr: number[]): number[] => {
  let nonZeroIndex = 0;

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is non-zero, swap it with the element at nonZeroIndex
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++; // Move to the next position for the next non-zero element
    }
  }

  return arr;
};

console.log(nonZeroAtEnd(arr));
