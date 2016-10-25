/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var length = s.length,
        hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    },
        lastChar = hash[s.charAt(0)],
        r = 0,
        i,
        currentChar;
    
    for (i = 0; i < length; i++) {
        currentChar = hash[s.charAt(i)];
        if (lastChar < currentChar) {
            r  = r - (lastChar * 2) + currentChar;
        } else {
            r += currentChar;
        }
        lastChar = currentChar;
    }
    return r;
};
