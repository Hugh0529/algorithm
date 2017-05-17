/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var res = [];
    var flag = false;
    var t = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        if (num === 0) {
            if (flag === true) {
                res.push(t);
            }
            t = 0;
            flag = false;
        } else {
            t += 1;
            flag = true;
        }
        if (i === 0) {
            res.push(t);
        }
    }
    return Math.max(...res);
};

