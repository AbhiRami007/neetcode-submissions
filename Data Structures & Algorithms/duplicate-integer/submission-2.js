
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicate = new Set(nums);
        if(duplicate.size == nums.length){
            return false
        }
        return true
    }
}
