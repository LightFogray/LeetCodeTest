var twoSum = function( nums, target ){
	
	var maps = new  Map();			//创建Map对象 保存新键值对
	
	for(let i = 0; i < nums.length; i++)
	{
		maps.set( nums[i], i );
	}
	
	for(let j = 0; j < nums.length; j++)
	{
		if(maps.has(target - nums[j]) && maps.get( target - nums[j] != j))
		{
			return [ maps.get( target - nums[j] ) , j ];
		}
	}
	
}