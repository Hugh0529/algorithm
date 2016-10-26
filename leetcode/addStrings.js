/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    /**
    '0'.charCodeAt() // 48
    '1'.charCodeAt() // 49
    .
    .
    .
    '97'.charCodeAt() // 57
    **/
    
    var carry = 0,
        result = '';
    
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
        let _num1 = i < 0 ? 0 : num1.charAt(i).charCodeAt() - 48;
        let _num2 = j < 0 ? 0 : num2.charAt(j).charCodeAt() - 48;
        let sum = _num1 + _num2 + carry;
        result = String(sum % 10) + result;
        carry = sum > 9 ? 1 : 0;
    }
    
    if (carry > 0) {
        result = carry + result;
    }
    
    return result;
};
