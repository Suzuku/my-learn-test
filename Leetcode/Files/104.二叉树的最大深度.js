/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
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
 * @return {number}
 */
var maxDepth = function (root) {
    let depth=1
    check(root, depth);
    // console.log(depth);
    // console.log(leftNum, rightNum);
};
function check(root, depth) {
    if(root){
        if (root.left) {
            depth+=1;
            console.log('left');
            check(root.left, depth);
        }
        if (root.right) {
            depth+=1;
            console.log('right');
            check(root.right, depth);
        }
    }
    
    console.log(depth);
}
maxDepth({ left: { value: 9 }, right: { value: 20, left: 15, right: 7 } });
// @lc code=end
