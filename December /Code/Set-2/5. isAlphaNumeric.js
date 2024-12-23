// Check if a string isAlphaNumeric.

const str ='12';

const isAlphaNumeric =(s)=> {
return /^[a-zA-Z0-9]+$/.test(s);
}



console.log(isAlphaNumeric(str));
