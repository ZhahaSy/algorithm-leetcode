function search(nums, target) {
    let result = -1;

    function helper(startIndex, endIndex) {
        if (startIndex === endIndex) return;
        if (nums[startIndex] === target) {
            result = startIndex;
            return;
        } else if (nums[endIndex] === target) {
            result = endIndex;
            return;
        }
        let middle = startIndex + parseInt((endIndex - startIndex) / 2);
        if (nums[middle] === target) {
            result = middle;
        } else if (nums[middle] < target && nums[startIndex] < nums[middle]) {
            helper(middle+1, endIndex);
        } else if (nums[middle] > target && nums[endIndex] > nums[middle]) {
            helper(startIndex, middle-1);
        }
        return result;
    }
    if (nums.length > 1) {
        helper(0, nums.length - 1)
    } else if (nums.length === 1) {
        result = nums[0] === target ? 0 : -1
    }
    
    return result
}

let arr = [2, 5];

let res = search(arr, 5)

console.log(res);