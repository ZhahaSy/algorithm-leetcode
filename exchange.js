/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    var oddIndex = 0;
    var evenIndex = nums.length - 1;

    var isOdd = (num) => {
        // if (num === 1 ) return true
        return num % 2 > 0 
    }

    while(oddIndex < evenIndex) {
        while(oddIndex < evenIndex && !isOdd(nums[evenIndex])) {
            evenIndex--
        }

        oddIndex < evenIndex && ([nums[oddIndex], nums[evenIndex]] = [nums[evenIndex], nums[oddIndex]])

        while(oddIndex < evenIndex && isOdd(nums[oddIndex])) {
            oddIndex++
        }

        oddIndex < evenIndex && ([nums[oddIndex], nums[evenIndex]] = [nums[evenIndex], nums[oddIndex]])


    }
    return nums

};

const nums = [1,2,3,4]
exchange(nums)
