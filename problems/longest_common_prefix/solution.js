/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]; //Initial Prefix

    for (let i = 0; i < strs.length; i++) {
        //Check if prefix matches
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); //find matching substring
            if (prefix === '') {return ''}; //No match, no common prefix
        }
    }
    return prefix;
};