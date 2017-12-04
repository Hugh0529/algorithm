/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var isSDN = num => {
        const str = String(num);
        for (let c of str) {
            const digit = Number(c);
            if (digit === 0 || num % digit !== 0) return false;
        }
        return true;
    };
    var res = [];
    for (let i = left; i <= right; i++) {
        isSDN(i) && res.push(i);
    }
    return res;
};

