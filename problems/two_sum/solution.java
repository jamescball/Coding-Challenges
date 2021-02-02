class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // find 2 numbers that add to target
        for(int i = 0; i < nums.length;i++) {
            for (int k = 0; k < nums.length;k++) {
                if (nums[i] + nums[k] == target && i != k) {
                    int[] r = new int[] {i,k};
                    return r;
                }
            }
        }
        return null;
    }
}