// 二叉树的遍历
// 前序 根 - 左子树 - 右子树
// 中序 左子树 - 根子树 - 右子树
// 后序 左子树 - 右子树 - 根子树


// 栈：先进后出  比喻：子弹
// 栈：先进先出  比喻：排队
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
 * @return {number[]}
 */
// 前序遍历 -- 递归
function preorderTraversal(root, result=[]) {
    if (!root) {return result}
    result.push(root)
    preorderTraversal(root.left, result)
    preorderTraversal(root.right, result)
}

// 前序遍历 -- 迭代
function preorderTraversal(root) {
    if (!root) return []
    let result = [];
    let stack = [];

    stack.push(root)
    while (stack.length) {

        let node = stack.pop();
        result.push(node.val);

        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return result
}