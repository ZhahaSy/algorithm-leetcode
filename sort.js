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

// 归并排序

// 快速排序