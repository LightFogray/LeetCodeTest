/**
 * @param {number} n
 * @return {number}
 */

// function getStair(stairs) {
//     if (stairs == 1) return 1;
//     else if (stairs == 2) return 2;
//     else return getStair(stairs - 1) + getStair(stairs - 2);
// }
// var climbStairs = function(n) {
//     console.log(getStair(n));
// };

// climbStairs(3)

// var climbStairs = function(n) {
//     if (n < 3) {
//         return n;
//     }
//     let f1 = 1;
//     let f2 = 2;
//     let f3 = 3;

//     for (let i=3; i<=n; i++) {
//         f3 = f2 + f1;
//         f1 = f2;
//         f2 = f3;
//     }
//     return f3;
    
// };

var climbStairs = function(n) {
    let arr = [1,1];
    for(let i = 2;i<=n;i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr[n];
};
console.log(climbStairs(5))