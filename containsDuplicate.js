/*
Contains Duplicate
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 Link - https://leetcode.com/problems/contains-duplicate/
 */
 var containsDuplicate = function(nums)
 {
     for (let i = 0; i < nums.length; i++)
         {
             for (let j = 0; j < nums.length; j++)
                 {
                     if (nums[i] == nums[j])
                         {
                             return true
                         }
                 }
         }
     
     return false
 }