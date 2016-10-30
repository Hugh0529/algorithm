/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    var count = 0;
    while (n !== 0) {
       if (n & 1 === 1) {
           count += 1;
       }
       n = n >>> 1;
    }
    return count === 1;
};
