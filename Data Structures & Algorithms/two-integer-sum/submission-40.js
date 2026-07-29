class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = {} // 4: 1, 5: 2,  
        let diff;
        for(let i=0; i<nums.length; i++){
            diff = target - nums[i]; //10-6 = 4
            if(numMap[diff]!==undefined){
                return [numMap[diff] , i]
            }
            numMap[nums[i]]=i
        }
    }
}
