/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var length = nums.length,
    i = 0,
    j = 0,
    loopCount = length;

  for (i; i < length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    } else {
      loopCount--;
    }
  }

  while (j < length) {
    nums[j++] = 0;
  }
};