/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var length = nums.length,
    i = length - 1,
    result = 0;

  if (length === 1) {
    return nums[0];
  }
  for (i; i >= 0; i--) {
    result = result ^ nums[i];
  }
  return result;
};
