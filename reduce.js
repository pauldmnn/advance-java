  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [2, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum)

const nums3 = [0, 1, 2, 3, 4];
let sum3 = nums3.reduce((acc, curr) => acc + curr, 5); // starts summing from 5 
console.log(sum3)
// break down of the above function
const nums1 = [2, 2, 3, 4, 5];
let sum1 = nums1.reduce((acc, curr) => {
    console.log(
      "Accumulator", acc, 
      "Current Value", curr,
      "Total", acc + curr)
    return acc + curr
});
console.log(sum1)

  // Starts the summing from 10 or what number is placed after the ending braces
const nums2 = [0, 1, 2, 3, 4];
let sum2 = nums2.reduce((acc, curr) => {
    console.log(
      "Accumulator", acc, 
      "Current Value", curr,
      "Total", acc + curr)
    return acc + curr
}, 10);
console.log(sum2)

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  
  
  // Grouping by a property, and totaling it too