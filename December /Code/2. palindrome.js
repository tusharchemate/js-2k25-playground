// palindrome string
const palindrome = (str) => {
  
let rev = "";

for(let i=str.length-1; i>=0; i--) {
    rev +=str[i];
}

return rev.toLowerCase() === str.toLowerCase();
  
}

console.log(palindrome('Madam')) // true
