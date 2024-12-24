// remove duplicates from a string

const str ='aaabbbccccsssssccc';

const removeDuplicates =(str: string): string => {
	let uniqueCharArry: string[] = [];
  
	for(let i = 0; i<str.length;i++) {	
  	
    if(!uniqueCharArry.includes(str[i])) {
    	uniqueCharArry.push(str[i]);
    }
  }
  
	return uniqueCharArry.join('');
}

console.log(removeDuplicates(str))
