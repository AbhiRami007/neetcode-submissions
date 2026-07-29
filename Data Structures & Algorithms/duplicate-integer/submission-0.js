class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicate =[];
        for(let i of nums){
            if(!duplicate.includes(i)){
                duplicate.push(i)
            }
            else{
                return true
            }
        }
        return false
    }
}

