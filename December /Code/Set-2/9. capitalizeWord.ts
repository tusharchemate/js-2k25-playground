// capitalize each word in string

const str ="tushar chemate devidas dAgdu";

const capitalizeWord =(str:string): string => {
	
  let result : string ="";
  
  for(let i = 0 ; i<str.length; i++) {	
  	
    if(i===0 || str[i-1] == " ") {	
       result += str[i].toUpperCase();
    } else {
    	result += str[i].toLowerCase();
    }
  
  }
  
  return result;
  
}

console.log(capitalizeWord(str));
