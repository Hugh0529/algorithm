/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var isSDN = num => {
        let cur = num;
        while (cur !== 0) {
            const digit = cur % 10;
            if (digit === 0 || num % digit !== 0) {
                return false;
            }
            cur = parseInt(cur / 10);
        }
        return true;
    };
    var res = [];
    for (let i = left; i <= right; i++) {
        isSDN(i) && res.push(i);
    }
    return res;
};

