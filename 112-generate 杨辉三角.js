/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let result = [];
    for (let index = 0; index < numRows; index++) {
        let cur = []
        result.push(cur)
        for (let j = 0; j < index + 1; j++) {
            if (j === 0 || j === index) {
                cur.push(1)
            } else {
                cur.push((result[index - 1][j] || 0) + (result[index - 1][j - 1] || 0))
            }
        }
    }
    return result
};