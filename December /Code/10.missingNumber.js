const arr = [1,2,4,5];

const findMissingNumber = (arr, n)=> {

// total sum 
const totalSum = (n * (n + 1)) / 2; 
// array sum
const arrSum = arr.reduce((sum, num)=> sum+num ,0);
  return totalSum - arrSum;
}


const res = findMissingNumber(arr, 5);

console.log(res); //3
 
