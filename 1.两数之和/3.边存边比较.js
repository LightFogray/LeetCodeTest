var twoSum = function( nums, target)
{
	const maps = {};//创建JSON数组
	
	for(let i = 0; i < nums.length; i++)
	{
		if(maps[ target - nums[i] ] >= 0)
		{
			return [ maps[ target - nums[i] ] , i ];
		}
		
		maps[nums[i]] = i;
	}
		
}

