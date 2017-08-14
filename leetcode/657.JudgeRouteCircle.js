/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var U = 0;
    var L = 0;
    for (var i = moves.length - 1; i >=0; i--) {
        var char = moves.charAt(i)
        switch (char) {
            case 'U':
                U += 1;
                break;
            case 'D':
                U -= 1;
                break;
            case 'L':
                L += 1;
                break;
            case 'R':
                L -= 1;
                break;
        }
    }
    return U === 0 && L === 0;
};

