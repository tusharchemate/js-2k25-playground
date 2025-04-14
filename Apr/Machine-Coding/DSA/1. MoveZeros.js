const nums = [1, 0, 01, 2, 0, 0, 01, 1, 1, 0]

const moveZeros = (nums) => {
  // will check nums
  if (!nums.length < 0) return

  let left = 0 //2

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) { 
      [nums[i], nums[left]] = [nums[left], nums[i]]
      left++
    }
  }

  return nums
}

console.log(moveZeros(nums))
