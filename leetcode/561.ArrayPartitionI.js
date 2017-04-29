ram {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var temp = new Array(20001);
    for (let i = 0; i < 20001; i++) {
        temp[i] = 0;
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        temp[nums[i] + 10000] += 1;
    }
    var res = 0;
    var flag = false;
    for (let i = 0; i < 20001;) {
        const num = temp[i];
        if (num > 0 && flag === false) {
            res = res + i - 10000;
            flag = true;
            temp[i] -= 1;
        } else if (num > 0 && flag === true) {
            flag = false;
            temp[i] -= 1;
        } else {
            i++;
        }
    }
    return res;
};

