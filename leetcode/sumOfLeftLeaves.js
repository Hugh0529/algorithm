/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (root === null) {
    return 0;
  }

  var result = 0;

  (function sum (node) {
    if (node.left !== null) {
      if (node.left.left === null && node.left.right === null) {
        result += node.left.val;
      }
      sum(node.left);
    }
    if (node.right !== null) {
      sum(node.right);
    }
  }(root));

  return result;
};