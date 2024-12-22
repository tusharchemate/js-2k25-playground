// find 1st non repeating character

const s = "swiss";

const nonRepeatingChar = (s) => {
 const countChar = new Map();
 
 for(let char of s ) {
  countChar.set(char, (countChar.get(char) || 0) + 1);
}

// find 1st non repeating char

for(let char of s) {
	
  if(countChar.get(char)=== 1) {
  	return char
  }
  
}
  
 return null;

}

console.log(nonRepeatingChar(s));
