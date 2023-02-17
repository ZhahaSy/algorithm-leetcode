//二叉树的后续遍历 
// 递归
var postorderTraversal = function (root) {
    if (!root) return [];
    let result = [];
    
    let helper = function (root) {
        root.left && helper(root.left)
        root.right && helper(root.right)
        result.push(root.val)
    }
    helper(root);
    return result
}

// 迭代
var postorderTraversal = function (root) {
    let result = []; let stack = [];

    let prev;

    while(stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        let node = stack.pop();

        if (node.right && prev !== node.right) {
            stack.push(node);
            root = node.right
        } else {
            result.push(node.val)
            prev = node
        }
    }
    
    return result
}