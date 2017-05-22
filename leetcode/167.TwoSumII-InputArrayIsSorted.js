/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var length = numbers.length;
    for (let i = 0; i < length; i++) {
        const item = numbers[i];
        if (item <= target) {
            for (let j = i + 1; j < length; j++) {
                if (item + numbers[j] === target) {
                    return [i + 1, j + 1];
                }
            }
        } else {
           break; 
        }
    }
    return [];
};

