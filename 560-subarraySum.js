/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let result = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        if (nums[i] === k) {
            result++
            sum = nums[i]
        } else {
            if (sum + nums[i] === k) {
            
                result++
                sum = nums[i]
            } 
            if (sum + nums[i] > k) {
                sum = nums[i]
            }
            if (sum + nums[i] < k) {
                sum += nums[i] 
            }
        }

        
    }
    return result
};

// console.log(subarraySum([1,1,1], 2));
console.log(subarraySum([1,2,3], 3));