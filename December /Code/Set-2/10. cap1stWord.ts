// capitalize 1st word in string
const str ='tushar devidas dagdu chemate';

const capitalizeWord = (str:string): string => {
	
  let result: string ="";
  
  for(let i = 0; i<str.length; i++) {	
  	
    if(i=== 0 || str[i-1] == " ") {
    	result += str[i].toUpperCase();
    } else {
    	result += str[i].toLowerCase();
    }
  	
  }
  
  return result;
}

console.log(capitalizeWord(str));
