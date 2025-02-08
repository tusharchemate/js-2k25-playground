// Find the max count of consecutive 1's in an array?

const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1,1,1, 0, 1];

const findMaxConsecutiveOnes = (arr) => {
  let maxCount = 0;
  let currCount = 0;

  for (const el of arr) {
   	
    if(el === 1) {
    	currCount++;
      maxCount = Math.max(currCount, maxCount)
      
    } else {
    currCount = 0;
    }
   
   
  }

  return maxCount
}

console.log(findMaxConsecutiveOnes(arr))
