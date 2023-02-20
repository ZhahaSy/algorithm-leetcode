// 二叉树的层序遍历
// https://leetcode.cn/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
// 使用递归
var levelOrder = function (root) {
    // 首先 需要一个字段来标识在每一次遍历时的层级。层级与result的index+1对应

    // 每当下一个层级时，传入level用于表示层级
    // 边界：!root return []

    if (!root) return [];
    let result = []
    let helper = function(root, level) {
        result[level] ? result[level].push(root.val) : result[level] = [root.val]
        root.left && helper(root.left, level + 1)
        root.right && helper(root.right, level + 1)
    };
    helper(root, 0)

    return result;
}

// 使用迭代
var levelOrder = function (root) {
 let result = [];
 let stack = [{level: 0, node: root}];
 // 首先 需要一个字段来标识在每一次遍历时的层级。层级与result的index+1对应
 // 迭代方案的二叉树遍历 一定需要一个栈来标识
 // 如何存储层级？ 使用 对象格式存储层级及节点 { level: 1, node: TreeNode }
 // 使用 前序遍历
 while (stack.length) {
    let {level, node} = stack.pop();

    result[level] ? result[level].push(node.val) : result[level] = [node.val];

    node.right && stack.push({
        level: level + 1,
        node: node.right
    });
    node.left && stack.push({
        level: level + 1,
        node: node.left
    });
 }
 return result;
 
}