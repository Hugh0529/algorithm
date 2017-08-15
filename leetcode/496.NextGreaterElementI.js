/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    return findNums.map(num => {
        var index = nums.indexOf(num) + 1;
        while (nums[index] < num) {
            index += 1;
        }
        return index < nums.length ? nums[index] : -1;
    })
};

