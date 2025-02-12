var removeDuplicates = function(nums) {
   let uniqueQ = [];

  for (let i = 0; i < nums.length; i++) {
    if (!uniqueQ[nums[i]]) {
      uniqueQ.push(nums[i]);
    }
  }

  return uniqueQ;
};
