class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sum = {} 
        let diff =0
        for(let i=0; i<nums.length; i++){
            sum[nums[i]] = i
        } 
        for(let i=0; i<nums.length; i++){
            diff = target - nums[i];
            if(sum[diff]!==undefined && sum[diff] !==i){
                return [i, sum[diff]]
            }

        }
        return []
    }
}
