const string ="banana"

const countCharInString = (str) => {

let count ={};

for(let key=0; key<=str.length-1; key++) {
	let char = str[key];
	count[char] ? count[char] = count[char] +1  : count[char] = 1;	
}
  
return count;
}

console.log(countCharInString(string));
