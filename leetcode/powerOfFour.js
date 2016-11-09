/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    num = num.toString(4);
    var flag = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        flag += Number(num.charAt(i));
    }
    return flag === 1;
};
