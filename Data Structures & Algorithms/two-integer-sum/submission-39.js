class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ind = {}
        if(nums.length == 2 ){
            return [0,1]
        }
        for(let i=0; i<nums.length; i++){
            ind[nums[i]]=i
        }
        for(let i=0; i<nums.length; i++){
            let diff = target-nums[i];
            if(diff+nums[i]==target && ind[diff]!=undefined && (i!==ind[diff])){
                return [i, ind[diff]]
            }
        }
    }
}
