/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表 
 * 有3种方法：
 * 1. 借助外部数组
 * 2. 双指针迭代
 * 3. 递归
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }
  return prev;
};

// @lc code=end