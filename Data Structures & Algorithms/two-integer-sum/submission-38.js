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
        console.log(ind)
        for(let i=0; i<nums.length; i++){
            let diff = target-nums[i];
            console.log("Diff= "+diff, "nums[i]= "+nums[i], "sum= "+target, "ind[diff]= "+ind[diff], "blah" +  i!==ind[diff] )
            console.log("i= "+i, "j= "+ind[diff])
            if(diff+nums[i]==target && ind[diff]!=undefined && (i!==ind[diff])){
                
                return [i, ind[diff]]
            }
        }
    }
}
