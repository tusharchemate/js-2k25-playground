// sort array 

const arr = [4,52,23,1,3,44];

const sortArray =(arr)=> {	
	
  for(let i=0; i<arr.length-1; i++) {
  	for(let j=0; j<arr.length-1; j++) {
    	
      if(arr[j] > arr[j+1]) {
      	
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
 
  }
  
  return arr;
}

console.log(sortArray(arr));
