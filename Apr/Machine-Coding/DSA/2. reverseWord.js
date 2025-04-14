const str = 'tushar chemate';


const reverseWord =(str)=> {
return str.split(' ').map((word)=> word.split('').reverse().join('')).join('  ')
}


console.log(reverseWord(str));
