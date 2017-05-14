/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var obj = {
        row1: 'qwertyuiop',
        row2: 'asdfghjkl',
        row3: 'zxcvbnm',
    };
    var res = [];
    var wordsLenght = words.length;
    for (let i = 0; i < wordsLenght; i++) {
        var item = words[i].toLowerCase();
        var itemLength = item.length;
        var index = 0;
        var item0 = item.charAt(0);
        if (obj.row1.indexOf(item0) !== -1) {
            index = 1;
        } else if (obj.row2.indexOf(item0) !== -1) {
            index = 2;
        } else if (obj.row3.indexOf(item0) !== -1) {
            index = 3;
        }
        var row = obj['row' + index];
        var flag = true;
        for (let j = 1; j < itemLength; j++) {
            const char = item.charAt(j);
            const _index = row.indexOf(char);
            if (_index === -1) {
                flag = false;
                break;
            }
        }
        flag && res.push(words[i]);
    }
    return res;
};

