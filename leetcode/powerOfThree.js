;ram {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    
    var sum = 0;
    n = n.toString(3);
    
    for (let i = n.length - 1; i >= 0; i--) {
        sum += Number.parseInt(n.charAt(i));
    }

    return sum === 1;
};
