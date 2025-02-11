var missingNumber = function (nums) {
    let n = nums.length;
    let eSum = (n * (n + 1)) / 2;
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    return eSum - sum;

};
