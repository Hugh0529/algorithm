/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var res = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};

