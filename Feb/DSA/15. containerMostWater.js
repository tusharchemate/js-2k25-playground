var maxArea = function (heights) {
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        const curArea = (right - left) * Math.min(heights[left], heights[right]);

        maxArea = Math.max(maxArea, curArea);

        heights[left] < heights[right] ? left++ : right--;
    }

    return maxArea;
};
