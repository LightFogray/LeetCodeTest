/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }
  let target,first,last;
  let result = [];//存放结果
  // 先进行排序--由大到小
  nums = nums.sort(function(a,b) {
    return b-a;
  });

  for( let i = 0; i < nums.length - 2; i++) {
    target = nums[i];
    //判断重复的数
    if (i > 0 && nums[i]===nums[i-1]) {
      continue;
    }
    //因从大到小排序，如果第一个最大的数都小于0 则和不可能为0
    if ( target < 0 ) {
      break;
    }
    first = i + 1;
    last = nums.length - 1;
    while (first < last) {
      //如果三者之和为0
      if ( nums[first] + nums[last] + target === 0 ) {
        result.push([nums[first],nums[last],target]);
        //判断有无重复值
        while ( nums[first] === nums[first + 1] ) {
          first ++;
        }
        while (nums[last] === nums[last - 1]) {
          last --;
        }
        //没有重复值，则各自往里缩
        first ++;
        last --;
        //若三者之和大于0，则需要first往右移
      }else if ( nums[first] + nums[last] + target > 0) {
        first ++;
      }else { //三者和小于0
        last --;
      }
    }

  }
  return result;

};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));