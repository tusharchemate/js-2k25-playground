// find kth top element

const arr =[1,3,4,66,777,334];
let k = 2;

const findKthTopElement =(arr, k)=> {
	
  let largest;
  
  // will run outer loop till k
  for(let i = 0; i < k; i++) {
  	
    // will declare a variable call largestIndex to keep track
    let largestIndex;
     largest = -Infinity;
  	
    // iterate over an array to find largest and then will update larget 
    // every iteratiom
    for(let j=0; j<arr.length;j++) {
    	
     	if(arr[j] > largest) {
      	
        largest = arr[j];
        largestIndex = j; 
      }
    }
  	arr[largestIndex] = -Infinity;
  }
  
  
  return largest;
}

console.log(findKthTopElement(arr,k)); // 334
