/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const temp = x;
    let reversed = 0;

    while (x>0){
        reversed = (reversed * 10) + (x%10);
        x = parseInt(x/10);
    }

    return reversed == temp;
};