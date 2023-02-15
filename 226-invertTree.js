// 翻转二叉树
// 递归
function invertTree(root) {
    if(!root) return root;
    let leftTem = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = leftTem
}


// 迭代
function invertTree(root) {
    if(!root) return root;
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
        let leftTem = node.left;
        node.left = node.right;
        node.right = leftTem;
    }
    return root
}


