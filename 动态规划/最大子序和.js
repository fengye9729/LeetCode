// https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dp = new Array(nums.length)
  dp[0] = nums[0]
  for(let i=1, len=nums.length; i<len; i++) {
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
  }
  console.log(dp)
  return Math.max(...dp)
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

