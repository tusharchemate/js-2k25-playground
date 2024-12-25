const digitToNumber =(str: string): string => {
	
  const numMap: { [key: string]: number } = {
  	'one':1,
    'zero':0,
    'three': 3,
    'five': 5,
    'seven':7,
    'six':6,
    'two':2,
    'eight':8,
    'four':4,
    'nine':9,
  }
  
 let splitArr = str.split(" ");
 
 let res ="";
 
 for(let i = 0; i<splitArr.length; i++) {	
    res += numMap[splitArr[i]];
  }
  return +res;
}

const digits = 'one zero three five seven nine six six eight four' // 1035796684 ;

console.log(digitToNumber(digits));
