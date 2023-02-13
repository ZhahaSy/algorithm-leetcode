/*
给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
*/ 

// 暴力解法， leetcode提交会超时，但是逻辑没问题
// function reverse(s) {
//     let newStr = ''
//     for (let i = s.length - 1; i >= 0; i--) {
//         newStr += s[i]
//     }
//     return newStr
// }
// var longestPalindrome = function(s) {
//     let res = '';
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             let str = s.slice(i, j+1);
//             if (str === reverse(str)) {
//                 res = str.length > res.length ? str : res
//             }
//         }
//     }
//     return res;
// }


// console.log(longestPalindrome("mwwfjysbkebpdjyabcfkgprtxpwvhglddhmvaprcvrnuxifcrjpdgnktvmggmguiiquibmtviwjsqwtchkqgxqwljouunurcdtoeygdqmijdympcamawnlzsxucbpqtuwkjfqnzvvvigifyvymfhtppqamlgjozvebygkxawcbwtouaankxsjrteeijpuzbsfsjwxejtfrancoekxgfyangvzjkdskhssdjvkvdskjtiybqgsmpxmghvvicmjxqtxdowkjhmlnfcpbtwvtmjhnzntxyfxyinmqzivxkwigkondghzmbioelmepgfttczskvqfejfiibxjcuyevvpawybcvvxtxycrfbcnpvkzryrqujqaqhoagdmofgdcbhvlwgwmsmhomknbanvntspvvhvccedzzngdywuccxrnzbtchisdwsrfdqpcwknwqvalczznilujdrlevncdsyuhnpmheukottewtkuzhookcsvctsqwwdvfjxifpfsqxpmpwospndozcdbfhselfdltmpujlnhfzjcgnbgprvopxklmlgrlbldzpnkhvhkybpgtzipzotrgzkdrqntnuaqyaplcybqyvidwcfcuxinchretgvfaepmgilbrtxgqoddzyjmmupkjqcypdpfhpkhitfegickfszermqhkwmffdizeoprmnlzbjcwfnqyvmhtdekmfhqwaftlyydirjnojbrieutjhymfpflsfemkqsoewbojwluqdckmzixwxufrdpqnwvwpbavosnvjqxqbosctttxvsbmqpnolfmapywtpfaotzmyjwnd"), 'bab');
// console.log(longestPalindrome('cbbd'), 'bb');

// 中间扩散
var longestPalindrome = function(s) {
    let result = s[0] || '';

    function helper(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (result.length < right - left - 1) {
            result = s.slice(left + 1, right)
        }
    }
    for (let i = 0; i < s.length; i++) {
        // 处理回文串为奇数的情况
        helper(i, i)
        // 处理回文串为偶数的情况
        helper(i, i + 1)
    }
    return result;
}

console.log(longestPalindrome('babad'), 'bab');
