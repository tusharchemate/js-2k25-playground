// Check if a string contains only digits.

const str ='12';

const isOnlyDigits =(s)=> {
return s.split('').every((char)=> char >='0' && char <='9')
}

console.log(isOnlyDigits(str)); // true
