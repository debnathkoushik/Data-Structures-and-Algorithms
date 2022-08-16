/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Link - https://leetcode.com/problems/product-of-array-except-self/
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums)
 {
     let product = 1
     let answer = []
     
     for (let i = 0; i < nums.length; i++)
     {
         for (let j = 0; j < nums.length; j++)
         {
             if ( i == j )
             {
                 continue
             }
             
             else
             {
                 product *= nums[j]
             }
         }
         
         answer.push(product)
         product = 1
     }
     
     return answer
 }   