/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLength = s.length,
        tLength = t.length,
        stringArr = [],
        aCharCode = 97,
        n,
        i;
        
    if (sLength !== tLength) {
        return false;
    }
    
    for (i = 25; i >= 0; i--) {
        stringArr[i] = 0;
    }
    
    for (i = sLength - 1; i >= 0; i--) {
        n = s.charAt(i).charCodeAt() - aCharCode;
        
        stringArr[n] += 1; 
    }
    
    for (i = tLength - 1; i >= 0; i--) {
        n = t.charAt(i).charCodeAt() - aCharCode;
        stringArr[n] -= 1; 
        if (stringArr[n] < 0) {
            return false;
        }
    }
    
    for (i = 25; i >= 0; i--) {
        if (stringArr[n] > 0) {
            return false;
        }
    }
    
    return true;
};
