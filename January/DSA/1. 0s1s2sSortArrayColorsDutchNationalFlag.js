const arr = [2,2,0,2,1,2,0,2,2,1,1,1,1,0];

const dutchNationalFlagAlgo =(nums) => {
	// will have a 3 pointer in single iteration
  // low, mid, high
  // if mid <= high - 
  // nums[mid] ==0 low <-> mid mid++ low++
  // nums[mid] ==1 mid++
  // nums[high] == 2 high <-> mid high--
 
  let low = 0, mid = 0, high = nums.length - 1;
    
  while(mid <= high) {
  	
    if(nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if(nums[mid] == 1) {	
    	mid++;
    } else if(nums[mid] == 2) {	
    	[nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
 
  }
 
}

dutchNationalFlagAlgo(arr);
console.log(arr);
