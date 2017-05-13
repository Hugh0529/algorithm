/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var set = new Set(candies);
    var l1 = candies.length;
    var l2 = set.size;
    var t = l1 / 2;
    if (l2 > t) {
        return t;
    }
    return l2;
};
