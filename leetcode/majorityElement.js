/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var length = nums.length;
    
    nums = nums.sort();
    
    return nums[Number.parseInt(length / 2)];
};
