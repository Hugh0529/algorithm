/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var res = 0;
    var t = 0;
    var i = nums.length - 1;
    for (; i >= 0; i--) {
        if (nums[i] === 0) {
            if (t > res) {
                res = t;
            }
            t = 0;
        } else {
            t++;
        }
    }
    if (t > res) {
        res = t;
    }
    return res;
};

