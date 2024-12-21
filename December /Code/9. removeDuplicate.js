// sort array 

const arr = [4,52,1,3,1,3,4];

const removeDuplicates =(arr)=> {	
	
  let uniqueNumber =[];
  
  for(let i = 0; i<=arr.length-1; i++) {
  	
   if(!uniqueNumber.includes(arr[i])) {
   	uniqueNumber.push(arr[i]);
   }
  
  }
 
 
  return uniqueNumber;
}

console.log(removeDuplicates(arr));
