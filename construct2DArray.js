/*
You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

Link - https://leetcode.com/problems/convert-1d-array-into-2d-array/
 */
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n)
 {
     let final2DArray = []
     
     if (m*n == original.length)
     {
         let counter = 0
         let j = 1
         let startingPosition = 0
         
         while (counter < m)
         {
             let tempRow = []
             let i = startingPosition
             
             for ( ; i <= j*n-1; i++)
             {
                 tempRow.push(original[i])
             }
             
             startingPosition = i
             final2DArray.push(tempRow)
             counter++
             j++
         }
         
         return final2DArray
     }
     
     else
     {
         return final2DArray
     }
 }