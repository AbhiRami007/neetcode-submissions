class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let maps={}
        let arr=[]
        for(let i=0; i<nums.length; i++){
            if(maps[nums[i]]==undefined){
                maps[nums[i]]= 0
            }
            maps[nums[i]]+=1
        }
        const sorted = Object.entries(maps).sort((a, b) => a[1] - b[1]);
        console.log(sorted)
         for(let i=sorted.length-1; i>=0; i--){
             if(k>0){
                 arr.push(sorted[i][0])
                 k--;
             }
            
        }
      return arr  
    }
}