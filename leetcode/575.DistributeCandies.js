/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var set = new Set(candies);
    return Math.min(set.size, candies.length / 2);
};
