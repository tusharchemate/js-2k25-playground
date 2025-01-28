function removeDuplicates(str) {
  let uniQ = [];
  
  for(let i =0;  i<str.length;i++) {
  	if(!uniQ.includes(str[i])) {
    	uniQ.push(str[i]);
    }
  }
  return uniQ.join('');
  
}

console.log(removeDuplicates("tushara"));  // Output: "tushar"
