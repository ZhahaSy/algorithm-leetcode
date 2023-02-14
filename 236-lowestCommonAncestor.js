/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 递归终止条件 && 边界判断
    if (!root || root === p || root === q) {
        return root;
    }

    // 递归查找
    //左侧中是否存在p或q
    //右侧侧中是否存在p或q
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    // 如果递归结果是两侧都有，直接返回当前节点
    if (left && right) {
        return root;
    }

    // 否则就是都在一侧，值为 left 或right

    return left || right;
};