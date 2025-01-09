const nums = [3, 2, 2, 3],
  val = 2

const removeElement = (nums, val) => {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i]
    }
  }
  return k
}

console.log(removeElement(nums, val))
