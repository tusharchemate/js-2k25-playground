const nums = '0223';


const digitToNumber =(nums)=> {
const digitsNum =['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

let res = "";

for(let num of String(nums)) {	

res += digitsNum[num] + " ";

}

return res;

}


console.log(digitToNumber(nums));
