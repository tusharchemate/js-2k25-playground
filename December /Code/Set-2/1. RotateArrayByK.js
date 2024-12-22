
const arr = [1,2,3,4,5,6,7];

const rotateArray =(arr, k) => {

let n = arr.length; 
/* k = k%n */; // to valid range

/* if(k< 0) k +=n */;

//step1 - reverse entire array
reverseArray(arr, 0, n - 1);

// step2  - reverse array from 0 to k

reverseArray(arr, 0, k - 1);

//step3 - reverse array from k to n

reverseArray(arr, k, n - 1 );

// will return reversed array
return arr;

}


// const reverseArray 
const reverseArray =(arr, start, end) => {
	while(start < end) {
  
  /* [arr[start], arr[end]] = [arr[end], arr[start]] */;
  
  let temp = arr[start]; 
  arr[start] = arr[end]; 
  arr[end] = temp;    
  
  
  start++;
  end--;
  
 
  }

}

console.log(rotateArray(arr, 3)); O/p : [5, 6, 7, 1, 2, 3, 4]
