const nums = [1, 1, 2]

const unique = (nums) => {
  let uniqueQ = []

  for (let i = 0; i < nums.length; i++) {
    if (!uniqueQ.includes(nums[i])) {
      uniqueQ.push(nums[i])
    }
  }

  return uniqueQ
}

console.log(unique(nums))
