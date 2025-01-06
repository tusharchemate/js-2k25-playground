const arr = [0, 0, 8,1,1,1,0,1, 88];


const moveAllZerosToEnd = (arr) => {

const nonZero = [];
const zero = [];

for(const num of arr) {
	if(num !== 0) {
    	nonZero.push(num);
    } else {
    zero.push(num)
    }
}

return [...nonZero, ...zero];

}

console.log(moveAllZerosToEnd(arr));



-- Ap 2 ---



  const arr = [1, 0, 0, 1, 4]

const moveAllZerosToEnd = (arr) => {
  let lastIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i]
      arr[i] = arr[lastIndex]
      arr[lastIndex] = temp
      lastIndex++
    }
  }
  return arr
}

console.log(moveAllZerosToEnd(arr))
