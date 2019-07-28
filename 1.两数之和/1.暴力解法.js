/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * ±©Á¦½â·¨
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++)
        {
            for(let j=i+1;j<nums.length;j++)
                {
                    if(nums[i]+[j]==target)
                        {
                            if(i!=j)
                                {
                                    return [i,j];
                                }
                        }
                }
        }
        
    }
};