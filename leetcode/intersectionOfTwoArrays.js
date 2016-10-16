/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var set1 = new Set(nums1),
    set2 = new Set(nums2),
    result = [];

  for (let item of set2.values()) {
    if (set1.has(item)) {
      result.push(item);
    }
  }

  return result;
};