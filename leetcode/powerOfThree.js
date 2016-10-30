/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    
    var sum1 = 0,
        sum2 = 0;
    n = n.toString(3);
    
    for (let i = n.length - 1; i >= 0; i--) {
        switch (n.charAt(i)) {
           case '1':
               sum1 += 1;
               break;
           case '2':
               sum2 += 1;
               break;
        }
    }

    return sum1 === 1 && sum2 === 0;
};
