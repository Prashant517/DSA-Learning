// Problem Description
// Given an array *nums*, find all unique triplets (group of 3 numbers) such that their sum is 0. There should be no duplicates i.e. no triplet should be repeated.

// Input format
// The first line consists of an integer, N, denoting the size of the array.

// The second line consists of N space separated integers which denote the elements of the array, nums.

// Output format
// You must return all such unique triplets which sum to 0 from the given array.

// Constraints
// 0 <= N <= 10^3

// 0 <= | nums[i] | <= 10^6, where nums[i] represents the value of each element in the array

// Sample Input 1
// 6

// -1 0 1 2 -1 -4

// Sample Output 1
// -1 0 1

// -1 -1 2

// Explanation 1
// These 2 triplets sum to 0 and there are no other such unique combinations. Note that the combination [-1 , 0, 1] can be created twice but is not repeated since we are only displaying unique combinations.

// Sample Input 2
// 7

// -3 0 1 2 -1 1 -2

// Sample Output 2
// -3 1 2

// -2 0 2

// -2 1 1

// -1 0 1

// Explanation 2
// These are the 4 triplets that sum to 0 and there are no other such unique combinations.

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video

console.log("Using Bruteforce Method");

const startTime = performance.now(); 

var loopCount = 0;
const nums = [-3, 0, 1, 2, -1, 1, -2];
const uniqueVal = new Set();
const n = nums.length;
const result = [];

for (let i = 0; i < n; i++){
    loopCount++;
    for (let j = i+1; j < n; j++){
        loopCount++;
        for (let k = j+1; k < n; k++){
            loopCount++;
            var sum = nums[i] + nums[j] + nums[k];
            if (sum === 0){
                const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                const val = triplet.join(','); // Convert to string val
                if (!uniqueVal.has(val)) {
                    result.push([nums[i], nums[j], nums[k]]);
                    uniqueVal.add(val); // store into uniqueVal to check next val should not same
                }
            }
        }
    }
}

const endTime = performance.now(); // End the timer

console.log(`Execution Time: ${(endTime - startTime).toFixed(2)}ms`);
console.log("loopCount : "+  loopCount);
result.forEach(triplet => console.log(triplet.join(' ')));