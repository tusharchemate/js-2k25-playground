const longestCommonPrefix = (strs) => {
    const sortedArr = strs.sort(); 
    let first = sortedArr[0]; 
    let last = sortedArr[sortedArr.length - 1]; 

    let myString = "";

    for (let i = 0; i <= first.length - 1; i++) {
        if (first[i] !== last[i]) 
            break;
        myString += first[i]; 
    }
    return myString;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
