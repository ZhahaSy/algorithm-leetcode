// 数组中的第K个最大元素

/* 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function findKthLargest(nums, k) {

    const len = nums.length
    function partition(left, right) {
        // 选择第一个作为标志位，
        let pivot = nums[left];

        while(left < right) {
            while(left < right && nums[right] >= pivot) {
                right--
            }

            left < right && (nums[left++] = nums[right])

            while(left < right && (nums[left] <= pivot)) {
                left++
            }
            
            left < right && (nums[right--] = nums[left])
        }

        nums[left] = pivot

        return left
    };

    function getKthSmall(left, right, k) {
        var current = partition(left, right)
        if (current === k) {
            return nums[current]
        } else if (current > k) {
            return getKthSmall(left, current+1, k)
        } else {
            return getKthSmall(current-1, right, k)
        }
    }

    return getKthSmall(0, len - 1, len - k)
}