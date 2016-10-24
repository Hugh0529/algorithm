/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var set = new Set(),
              i;
        
    for (i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    
    return false;
};
