;ram {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var count = 0,
	    sum,
	    remain;
	    
    while (count < 1000) {
        count += 1;
        sum = 0;
        while (n > 0) {
            remain = n % 10;
            sum += remain * remain;
            n = Number.parseInt(n / 10, 10);
        }
        if (sum === 1) {
            return true;
        }
        else {
            n = sum;
        }
    }
    return false;
};
