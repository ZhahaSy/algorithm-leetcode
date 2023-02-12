// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// hashMap
var twoSum = function(nums, target) {
    let map = new Map();
    let i = 0;
    while(i<nums.length) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
        i++
    };
};

// 双层循环
var twoSum = function(nums, target) {
    let i = 0;
    let j = 1;
    while (i <= nums.length) {
        while(j <= nums.length) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
            j++
        }
        i++
        j = i + 1
    };
};