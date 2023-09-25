/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let resultSet = new Map();
    for (let i = 0; i < strs.length; i++) {
        let cur = strs[i].split('').sort().join('');
        if (resultSet.has(cur)) {
            resultSet.set(cur, [...resultSet.get(cur), strs[i]])
        } else {
            resultSet.set(cur, [strs[i]])
        }
    }
    resultSet.forEach(val => result.push(val))
    return result
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));