// 冒泡排序
function bubbleSort (arr) {
    for (let i = 0; i< arr.length; i++){
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                [ arr[j], arr[j - 1] ] = [arr[j - 1], arr[j]]
            }
        }
    }
    return arr
}
// console.log(bubbleSort([3, 1,3,2,6,4]));

// 选择排序
function selectionSort(arr) {
 for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j] ) {
            minIndex = j
        }
    }
    [arr[i], arr[minIndex] ] = [arr[minIndex], arr[i]]
 }
 return  arr
}

// 插入排序
var findKthLargest = function(nums, k) {
    var cur, preIndex;
    for(let i = 1; i < nums.length; i++) {
        cur = nums[i];
        preIndex = i - 1;
        while(preIndex >= 0 && nums[preIndex] > cur) {
            nums[preIndex + 1] = nums[preIndex]
            preIndex--;
        }
        nums[preIndex + 1] = cur;
    }
    return nums
};

// 快速排序
// 算法思路：
/**
 * 1. 选择基准数，设置起始与结束坐标，把数字划分为左右两个数组。
 * 2. right 和 left 两个指针
 * 3. 找出右侧小于基准值的数，停止遍历；
 * 4. 找出左侧大于等于基准数的值停止遍历；
 * 3. 找到后，当left < right时，翻转两个值，
 * 4. 当left === right；及遍历结束，把left 和 基准数进行翻转
 * 6. 返回 基准开始时的坐标
 * 7. 此时 基准数左边的数一定小于基准数， 右边的数一定大于基准数
 * 
 * 8. 继续递归排序基准数左侧的序列与基准数右侧的序列，直到子序列的值只有一个。
 * 
*/
function swap(arr, a,b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function partition (arr, startIndex, endIndex) {
    let pivot = arr[startIndex]
    let left = startIndex;
    let right = endIndex;

    while(left !== right) {
        while(left < right && arr[right] > pivot) {
            right--;
        }
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        if (left < right) {
            swap(arr, left, right)
        }
    }
    swap(arr, left, startIndex);
    return left
};

function quickSort(arr, startIndex, endIndex) {
    if (startIndex < endIndex) {
        let partitionIndex = partition(arr, startIndex, endIndex);
        console.log(partitionIndex);
        
        quickSort(arr, startIndex, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, endIndex)
    }
    return nums
}

var findKthLargest = function(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
};
// 归并排序

// 快速排序