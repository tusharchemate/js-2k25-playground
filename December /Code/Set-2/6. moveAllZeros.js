const arr =[0,2,3,34,9,0,-1,-33,9];

const moveAllZeros = (arr) => {

let nonZeroIndex = 0;

for(let i = 0; i<arr.length;i++) {

	if(arr[i] !== 0) {
  	
    /* let temp = arr[nonZeroIndex];
    arr[nonZeroIndex] = arr[i];
    arr[i] = temp; */
    
    [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
    
    nonZeroIndex++;
  } 

}

return arr;

}

console.log(moveAllZeros(arr));
