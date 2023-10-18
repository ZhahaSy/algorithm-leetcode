/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let result = true;
    const dfs = function(node, min, max) {
        // 每一次都需要判断 node.val 的 最大值和最小值
        if (!(node.val > min && node.val < max)) {
            result = false
        }
        if (!result) return;
        if (node.left) {
            dfs(node.left, Math.min(min, node.val), Math.max(min, node.val))
        }
        if (node.right) {
            dfs(node.right, Math.min(max, node.val), Math.max(max, node.val))
        }
    }
    dfs(root, -(2 ** 31)  -1, 2 ** 31 + 1)
    return result
};