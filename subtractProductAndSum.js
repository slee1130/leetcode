// /**
//  * @param {number} n
//  * @return {number}
//  */
var subtractProductAndSum = function (n) {
 const ntostring = n.toString().split('');
 let product = ntostring.reduce((total,curr)=>total * +curr,1);
 let sum = ntostring.reduce((total,curr)=>total + +curr,0);

 return product-sum;
};

//braingstorming
//1.split n ->make it string and then split
//2.use reduce method
//3. to know reduce method:
//Definition and Usage
//The reduce() method reduces the array to a single value.

//The reduce() method executes a provided function for each value of the array(from left - to - right).

//The return value of the function is stored in an accumulator(result / total).

//Note: reduce() does not execute the function for array elements without values.

//Note: this method does not change the original array.





