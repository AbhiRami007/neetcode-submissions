class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count= {}
        if(s.length!==t.length){
            return false
        }
        for (let i of s){
            count[i] = (count[i] || 0)+1
        }
        for(let i of t){
            if(!count[i]) return false
            count[i]--
        }
        return true
    }
}
