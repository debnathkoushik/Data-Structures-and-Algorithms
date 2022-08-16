/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Link - https://leetcode.com/problems/majority-element/
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums)
{
    let array_2 = []
    
    //constructor
    function Object(value, counter)
    {
        this.value = value
        this.counter = counter
    }
    
    //stores all the elements in an array of objects
    //and number of times they appeared
    for (let i = 0; i < nums.length; i++)
    {   
        if (array_2.length == 0)
        {
            let object = new Object(nums[i], 1)
            array_2.push(object)
        }
        
        else
        {
            let j = 0
            let check = 0
        
            for (; j < array_2.length; j++)
            {
                if ( nums[i] == array_2[j].value )
                {   
                    array_2[j].counter++
                    check = 1
                }
            }
            
            if (check != 1)
            {
                let object = new Object(nums[i], 1)
                array_2.push(object)
            }
        }   
    }        
    
            //filters out the majority element in an array
            let maxCounter = array_2[0].counter
            let appearsMax = array_2[0]
        
            for (let i = 0; i < array_2.length; i++)
            {
                if ( array_2[i].counter > maxCounter && array_2[i].counter > nums.length/2 )
                {
                    appearsMax = array_2[i]
                }
            }
            
            return appearsMax.value
}