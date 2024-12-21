// Merge two sorted arrays.

const mergedArray = (arr1, arr2) => {

let res = [];

let i= 0, j= 0;

// will use while until we iterate over arrays

while(i< arr1.length && j< arr2.length) {
	
  if(arr1[i] < arr2[j]) {
  	res.push(arr1[i++]);
   // i++;
  } else {
  	res.push(arr2[j++]);
   // j++;
  }

	// there will be an possiblity both array lenght
  
 

}
 while(i< arr1.length){
  	res.push(arr1[i++]);
  //  i++;
  }
  
  while(j<arr2.length) {
  res.push(arr2[j++]);
 // j++;
  }

return res;

}


const arr1 = [1,2,3,4,7];
const arr2 = [4,7,9]; 


console.log(mergedArray(arr1, arr2));


