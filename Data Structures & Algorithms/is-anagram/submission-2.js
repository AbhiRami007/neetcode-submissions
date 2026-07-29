class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charCounts = {};
        let charCountb = {};
        if(s.length!==t.length){
            return false
        }
        else{
            for(let i=0; i<s.length; i++){
                charCounts[s[i]] = (charCounts[s[i]] || 0 )+1
                charCountb[t[i]]= (charCountb[t[i]] || 0 )+1
            }
            for (let key in charCounts) {
    if (charCounts[key] !== charCountb[key]) {
        return false;
    }
}
return true;
        }

    }
}
