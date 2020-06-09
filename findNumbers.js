// /**
//  * @param {number[]} nums
//  * @return {number}
//  */


//for in vs for of


var findNumbers = function (nums) {
    let result = 0;
    for (let i of nums) {
        if (String(i).length % 2 == 0) {
            result++;
        }
    }
    return result;
};