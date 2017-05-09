/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var s = num.toString(2);
    var res = '';
    var length = s.length;
    for (let i = 0; i < length; i++) {
        var item = s.charAt(i) === '0' ? '1' : '0';
        res = res + item;
    }
    return parseInt(res, 2);
};
