// Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /* 考虑时间复杂度低于o(n2)的算法
       这题最简单的是双层遍历即可
       如果要降低复杂度 可以考虑使用map的随机读取 */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    //   需要先检测是否匹配 再进行插入 否则会存在自己和自己匹配的问题
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    }
  }
  console.log('map', map);
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 3,4], 7));

