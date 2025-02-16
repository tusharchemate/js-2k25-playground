
function constructDistancedSequence(n) {

    const result = new Array(2 * n - 1).fill(0);
    const used = new Array(n + 1).fill(false);

    const dfs = (index, result, used, n) => {
        if (index === result.length) {
            return true;
        }

        if (result[index] !== 0) {
            return dfs(index + 1, result, used, n);
        }

        for (let i = n; i >= 1; i--) {
            if (used[i]) {
                continue;
            }

            if (i === 1) {
                used[i] = true;
                result[index] = i;

                if (dfs(index + 1, result, used, n)) {
                    return true;
                }

                used[i] = false;
                result[index] = 0;
            } else if (index + i < result.length && result[index + i] === 0) {

                used[i] = true;
                result[index] = i;
                result[index + i] = i;

                if (dfs(index + 1, result, used, n)) {
                    return true;
                }

                used[i] = false;
                result[index] = 0;
                result[index + i] = 0;
            }
        }

        return false;
    }

    dfs(0, result, used, n);
    return result;
}
