/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = [];
  var i = 0;
  var numb1;
  var numb2;
  var map = {};
  for (i; i < nums.length; i++) {
    num1 = nums[i];
    num2 = target - num1;
    if (num2 in map && i !== map[num2]) {
      result.push(map[num2]);
      result.push(i);
      break;
    } else {
      map[num1] = i;
    }
  }
  return result;
};

var nums = [3, 2, 4];
var target = 6;
twoSum(nums, target);
