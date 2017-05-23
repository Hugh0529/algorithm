/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var length = numbers.length;
    var index1 = 0;
    var index2 = length - 1;
    while (index1 < index2) {
        if (numbers[index2] + numbers[index1] > target) {
            index2--;
        } else if (numbers[index2] + numbers[index1] < target) {
            index1++;
        } else {
            return [index1 + 1, index2 + 1];
        }
    }
    return [];
};

