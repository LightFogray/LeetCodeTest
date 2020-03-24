// [1,8,6,2,5,4,8,3,7]------49
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(number) {
//     var area = 0;
//     var maxarea = 0;
//     for (let i = 0; i < number.length - 1; i++) {
//         for (let j = i + 1; j < number.length; j++) {
//             area = (j - i) * Math.min(number[i],number[j]);
//             maxarea = Math.max(maxarea,area);
//         }
//     }
//     return maxarea;
// };

var maxArea = function(number) {
    var area = 0;
    var maxarea = 0;
    var minHeight = 0;
    for (let i = 0, j = number.length - 1;i < j; ) {
        minHeight = number[i] < number[j] ? number[i++] : number[j--];
        area = (j - i + 1) * minHeight;
        maxarea = Math.max(maxarea,area);
    }
    
    return maxarea;
};
var arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));