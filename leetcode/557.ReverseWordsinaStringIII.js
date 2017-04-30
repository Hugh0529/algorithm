/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr = s.split(' ');
    for(let i = arr.length -1; i >= 0; i--) {
        const item = arr[i];
        let newItem = '';
        for (let j = item.length - 1; j >= 0; j--) {
            newItem += item.charAt(j);
        }
        arr[i] = newItem;
        
    }
    return arr.join(' ');
};

