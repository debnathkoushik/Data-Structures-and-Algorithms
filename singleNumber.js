/*
Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Link - https://leetcode.com/problems/single-number/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums)
 {
     let arrayOfObjects = []
     
     /*
     constructor
     */
     function constructor(value, counter)
     {
         this.value = value
         this.counter = counter
     }
     
     for (let i = 0; i < nums.length; i++)
     {
         if (i == 0)
         {
             const newObject = new constructor(nums[i], 0)   
             arrayOfObjects[0] = newObject
         }
         
         else
         {
             let k = 0
             for ( ; k < arrayOfObjects.length; k++)
             {
                 if ( nums[i] == arrayOfObjects[k] )
                 {
                     arrayOfObjects[k].counter++ 
                 }
 
             }
             
             const newObject = new constructor(nums[i], 0)   
             arrayOfObjects[k] = newObject
         } 
     }
     
     for (let i = 0; i < arrayOfObjects.length; i++)
     {
         if (arrayOfObjects[i].counter == 0)
         {
             return arrayOfObjects[i].value
         }
     }
 }