ram {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = nums[0],
        length = nums.length,
        sum = min;
        
    for (let i = length - 1; i > 0; i--) {
        let num = nums[i];
        sum += num;
        min = num < min ? num : min;
    }
    
    return sum - min * length;
};

