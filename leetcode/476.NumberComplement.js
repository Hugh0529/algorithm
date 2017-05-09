ram {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var sum = 0;
    var i = 0;
    while (sum < num) {
        sum += Math.pow(2, i);
        i++;
    }
    return sum - num;
};

