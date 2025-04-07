function partition (nums, start, end) {
    const pvt = nums[start];
    let left = start
    let right = end;
    while(left < right) {
        while (left < right && nums[right] > pvt) {
            right--;
        }
        while (left < right && nums[left] <= pvt ) {
            left++;
        }
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    }
    [nums[left], nums[start]] = [nums[start], nums[left]]
    return left;
}
function qst (nums, start, end) {
    
    if (start < end) {
        let mid = partition(nums, start, end)
        console.log(mid);

        qst(nums, start, mid - 1)
        qst(nums, mid + 1, end)
    }
    return nums
}
function st (nums) {
    qst(nums, 0, nums.length - 1)
    return nums
}

console.log(st([3,5,6,2,1,9]));
