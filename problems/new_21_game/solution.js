/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if( k === 0 || n >= k + maxPts) return 1.0; //n or fewer

    // Probability n or fewer
    let dp = [n + 1];
    dp[0] = 1.0;

    let sum = 1.0, res = 0.0;
    for (let i = 1; i <= n; ++i) { //Calc prob for n or fewer 
        dp[i] = sum / maxPts;
        if (i < k) sum += dp[i];
        else res += dp[i];
        if (i >= maxPts) sum -= dp[i - maxPts];
    }
    return res;
};