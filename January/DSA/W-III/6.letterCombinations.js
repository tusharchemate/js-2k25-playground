var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };


    const output = [];

    const backtrack = (curr, i) => {
    
        if (i === digits.length) {
            output.push(curr); return;
        }

        const letters = keyboard[digits[i]];
        for (let letter of letters) {
            backtrack(curr + letter, i + 1);
        }
    }
    backtrack('', 0);
    return output;
};


console.log(letterCombinations("23"))
