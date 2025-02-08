// Find factorial of n

const number = 5

const factorial = (num) => {
  if (num == 1) return 1

  return num * factorial(num - 1)
}

console.log(factorial(number))
