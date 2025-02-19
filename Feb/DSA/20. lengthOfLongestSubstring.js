var lengthOfLongestSubstring = function (s) {
    let j = 0, i = 0; max = 0;
    let set = new Set();

    while (j < s.length) {

        if (!set.has(s[j])) {
            set.add(s[j]);
            max = Math.max(max, set.size);
            j++;
        } else {
            set.delete(s[i]); i++
        }
    }

    return max;
};
