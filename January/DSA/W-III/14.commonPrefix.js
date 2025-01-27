const strs = ["flower","flow","flight"];

const commonPrefix = (strs) => {

const sortedStr = strs.sort();
const first = sortedStr[0];
const last = sortedStr[sortedStr.length-1];

let prefix ="";

for(let i=0; i<first.length;i++) {
	
  if(first[i] !== last[i]) break;
  prefix +=first[i]
  
}

return prefix;
}


console.log(commonPrefix(strs));
