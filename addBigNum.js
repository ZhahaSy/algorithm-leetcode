/**
题目：实现两个大数相加。

提示：

是整数；
考虑两个数很大，超过JS安全整数范围；
两个数都以字符串形式输入；
 结果也以字符串输出；
样例1:

输入：a = ‘9 7346 0249’，b = '7 3895 6258'
输出：result = '17 1241 6507'
样例2:

输入：a = ‘9965’，b ='39'
输出：result = '10004'
*/
var addBigNum = function(numA,numB) {
    let i = numA.length - 1;
    let j = numB.length - 1;

    let curry = 0;
    let result = [];
    while(i >= 0 || j >= 0) {
        let res = (+(numA[i] ? numA[i] : 0) + +(numB[j] ? numB[j] : 0) + curry).toString();
        if (+res > 9) {
            curry = 1
            result.unshift(res[1])
        } else {
            curry = 0
            result.unshift(res)
        }
        i--, j--
    }
    curry && result.unshift(curry)
    return result.join('')
}

console.log(addBigNum('63801014', '234234235678')) // 234298036692
console.log(addBigNum('973460249312', '738956258')) // 974199205570
console.log(addBigNum('39', '9965')) // 10004
console.log(addBigNum('11', '124')) // 135
console.log(addBigNum('', '')) // 0