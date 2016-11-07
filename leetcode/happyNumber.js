/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    var splitNumber = function (number) {
        var arr = []; 
        while (number > 0) {
            let remainder = number % 10;

            arr.push(remainder);
            number = Number.parseInt(number / 10, 10);
        }
        return arr;
    };

    var sumOfSquares = function (arr) {
        return arr.length === 0 ? 0 : arr.reduce(function (pre, current) {
            return Math.pow(pre, 2) + Math.pow(current, 2);
        });
    };
    
    var number = sumOfSquares(splitNumber(n));
    return  number === 1 || isHappy(number);
};
