/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var compare = function (a,b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    };
    nums = nums.sort(compare);
    var result = 0;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            result += nums[i];
        }
    }
    return result;
};

