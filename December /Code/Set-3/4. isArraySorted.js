const arr =[1,2,3,4,5,5,5.5, 5.76, 2];

const isArraySorted = (arr)=> {

	for(let i = 0; i<arr.length;i++ ) {
  	
    if(arr[i] > arr[i+1]) {
    	return false;
    }
    
  }
	return true;

}

console.log(isArraySorted(arr));
