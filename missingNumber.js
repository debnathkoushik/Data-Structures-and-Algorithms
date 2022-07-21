/*
Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Link - https://leetcode.com/problems/missing-number/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums)
{
    //variable to store the sum of the given array i.e. nums
    let sum_of_nums = 0

    //variable to store the sum of the original array
    let  sum_of_original_array = 0
    
    for (let i = 0; i < nums.length; i++)
    {
        sum_of_nums += nums[i]    
    }

    
    for (let j = 1; j <= nums.length; j++)
    {
        sum_of_original_array += j
    }
    
    
    return sum_of_original_array-sum_of_nums
} 