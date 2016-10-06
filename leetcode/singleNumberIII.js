/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var length = nums.length,
    diff = 0,
    result = [0, 0],
    num,
    i;

  for (i = length - 1; i >= 0; i--) {
    diff ^= nums[i];
  }

  diff &= -diff;

  for (i = length - 1; i >=0; i--) {
    num = nums[i];
    if ((num & diff) === 0) {
      result[0] ^= num;
    } else {
      result[1] ^= num;
    }
  }

  return result;
};
