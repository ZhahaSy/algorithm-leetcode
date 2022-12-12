var search = function(nums, target) {
    let left, right, current
    left = 0;
    right = nums.length - 1;
    current = -1
    while (nums.length && left < right) {
        current = Math.floor((right + left) / 2)
        if (nums[current] === target) {
            return current;
        }
        
    }
    return current;
};