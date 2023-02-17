// 二叉树 中序遍历
// 递归
var inorderTraversal = (root) => {

    let result = [];

    function helper(root) 
    {
        if (!root) return [];
        helper(root.left)
        result.push(root.val)
        helper(root.right)
    }
    helper(root)

    return result
}
// 迭代
var inorderTraversal = (root) => {
    let result, stack = [];
    while(stack.length || root) {
        // 先把所有左侧的root压入栈
        while (root) {
            stack.push(root)
            root = root.left
        }
        // 左侧全部压完之后，最左树节点在栈低，从上往下取出来
        root = stack.pop();
        // 从左往右添加节点值
        result.push(root.result);
        // 把最右侧压入栈,等待下次遍历
        root = root.right;
    }
}