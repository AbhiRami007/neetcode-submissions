class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let count = {}
        for(let str of strs){
            let a = [...str].sort().join('');
            if(count[a]==undefined){//act: [], pots: [], stop:[]
                count[a]=[]
            }
            count[a].push(str)
        }
        return Object.values(count)
    }
}

