/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) {
       return "0";
    }

    var map = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
        bits = [],
        trimStart = 0,
        result = '';
    
    for (let i = 0; i < 32; i++) {
        bits[i] = ((1 << i) & num) !== 0 ? 1 : 0;
    }
    
    for (let i = 0; i < 8; i++) {
        let mapIndex = 0;
        for (let j = 0; j < 4; j++) {
            mapIndex += (1 << j) * bits[i*4 + j];
        }
        result = map[mapIndex] + result;
    }
    
    while (result.charAt(trimStart) === '0') {
        trimStart += 1;
    }
    
    return result.substring(trimStart);
    
};
