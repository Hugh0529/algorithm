/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var res = '';
    var spaceFlag = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ') {
            spaceFlag.push(i);
        }
    }
    spaceFlag.push(s.length);
    var i = 0;
    var length = spaceFlag.length;
    while (i < length) {
        const index = spaceFlag[i];
        const preIndex = spaceFlag[i - 1] || 0;
        var si;
        for (let j = index - 1; j >= preIndex; j--) {
            si = s.charAt(j);
            if (si !== ' ') {
                res = res + si;
            }
        }
        if (i !== length - 1) {
            res += ' ';
        }
        i++;
    }
    return res;
};

