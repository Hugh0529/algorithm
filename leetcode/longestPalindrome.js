/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var set = new Set(),
        length = s.length,
        item,
        i,
        odd;
    
    for (i = length - 1; i >=0; i--) {
        item = s.charAt(i);
        if (set.has(item)) {
            set.delete(item);
        } else {
            set.add(item);
        }
    }
    
    odd = set.size;
    return length - (odd === 0 ? 0 : odd -1 );
};
