const word1 = "abc", word2 = "pqr";

const mergeStringAlternatively =(word1, word2) => {
	let maxLength = Math.max(word1.length, word2.length);
  console.log(maxLength);
  let res="";
  for(let i = 0; i<maxLength; i++) {
  		if(word1[i]) res += word1[i];
      if(word2[i]) res += word2[i]
  }
  return res;
}


console.log(mergeStringAlternatively(word1, word2));
