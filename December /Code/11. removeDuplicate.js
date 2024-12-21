const arr = [1, 1, 3, 3, 3333, 22, 2, 2, 1, 5];

const findDuplicateNumbers = (arr) => {
  let seen = new Set();
  let duplicates = new Set();
  
  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  
  return [...duplicates];
}

console.log(findDuplicateNumbers(arr)); 
