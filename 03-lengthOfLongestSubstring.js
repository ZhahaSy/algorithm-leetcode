/**
 * @param {string} s
 * @return {number}
 */
// 暴力解法
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for(let i = 0; i< s.length; i++) {
        let str = ''
        for(let j = i; j < s.length; j++) {
            let index = str.indexOf(s[j])
            if (index === -1) {
                str+=s[j]
            } else {
                break;
            }
        };
        max = Math.max(str.length, max);
    }
    
    return max;
};

// 优化  
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let str = ''
    for(let i = 0; i< s.length; i++) {
        let index = str.indexOf(s[i])
        if (index === -1) {
            str+=s[i]
        } else {
            str = str.slice(index + 1) + s[i]
        }
        max = Math.max(str.length, max);
    }
    
    return max;
};