const str = 'Tushar';
const str2 = 'Chemate';

const combineAlternateLetters = (s1, s2) => {
    let res = [];
    let maxLength = Math.max(s1.length, s2.length); 

    for (let i = 0; i < maxLength; i++) {
        if (s1[i]) res.push(s1[i]);  
        if (s2[i]) res.push(s2[i]);  
    }

    return res.join(''); 
};

console.log(combineAlternateLetters(str, str2));
