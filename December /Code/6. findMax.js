const arr = [1,3,4,5,6,7,188, 4];

const findMax = (arr)=> {
	let max = -Infinity;
  
  for(let i=0; i<arr.length;i++) {
  	if(arr[i]> max) {
    	max = arr[i];
    }
  }
  
  return max;

}

console.log(findMax(arr));
