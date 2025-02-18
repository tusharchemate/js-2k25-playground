var xorQueries = function (arr, queries) {
    let n = arr.length;
    let prefix = new Array(n);
    let ans = [];

    prefix[0] = arr[0];

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] ^ arr[i];
    }
    for (let [left, right] of queries) {
        if (left === 0) ans.push(prefix[right]);
        else ans.push(prefix[right] ^ prefix[left - 1]);
    }
    return ans;
};
