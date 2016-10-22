/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var length = s.length,
        item,
        i;
        
    for (i = 0; i < length; i++) {
        item = s.charAt(i);
        if (s.indexOf(item) === s.lastIndexOf(item)) {
            return i;
        }
    }
    return -1;
};
