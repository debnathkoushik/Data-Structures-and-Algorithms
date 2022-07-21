/*
Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Link - https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
/**
* @param {number[]} nums
* @return {number[]}
*/
var findDisappearedNumbers = function(nums)
{
    //to store the missing numbers
    let array = []

    //keeps a track on the position in the "array"
    let counter = 0

    for (let i = 1; i <= nums.length; i++)
    {
        let j = 0
        for ( ; j < nums.length; j++)
        {
            //checks for missing number in the array "nums"
            //breaks out of the current loop if matches
            if (i == nums[j] )
            {
                 break
            }
        }
         
        //checks for missing number in the array "nums"
        //when condition gets satisfied stores the missing number in "array"
        if (i != nums[j] )
        {
             array[counter] = i
             counter++
        }
    }
     
    return array
}