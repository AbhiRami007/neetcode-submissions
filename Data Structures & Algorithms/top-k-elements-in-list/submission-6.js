class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqCount = {}
        for(let i of nums){
            freqCount[i]=(freqCount[i]||0)+1 
        }
        return Object.entries(freqCount).sort((a,b)=>b[1]-a[1]).slice(0, k)
    .map(([num]) => num);
    }
}
