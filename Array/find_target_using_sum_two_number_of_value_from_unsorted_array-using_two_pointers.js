// Problem Description
// Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.

// Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.

// Print the indices in increasing order.

// Input format
// First line contains an Integer N that represents the number of elements in the array.

// Second line contains N space separated integers, which are members of the array.

// Third line contains an integer X, which is the target value.

// Output format
// Print two space separated indices(in increasing order) of the numbers which add up to the specified target.

// Constraints
// 2 <= Length of array <= 100000

// 1 <= Range of values <= 1000000

// Sample Input 1
// 5 --> Number of elements in array

// 2 4 5 9 8 --> Array elements

// 7 --> Target sum value

// Sample Output 1
// 0 2


let inputArr = [2,4,5,9,8];
let n = inputArr.length;
    
let numbers = [];

function findTargetValue(target){
    // Step 1: Pair array values with their indices
    const indexedArr = inputArr.map((value, index) => ({ value, index }));
    // Step 2: Sort based on values
    indexedArr.sort((a, b) => a.value - b.value);

    // Step 3: Two-pointer approach
    let l = 0;
    let r = n-1;
    while(l<r){
        const sum = indexedArr[l].value + indexedArr[r].value;
        if(sum === target){
            // Retrieve and print original indices in ascending order
            const idx1 = indexedArr[l].index;
            const idx2 = indexedArr[r].index;
            numbers[0] = Math.min(idx1, idx2); //store min value index
            numbers[1] = Math.max(idx1, idx2); //store max value index
            return numbers;
        }
        else if(sum < target){
            l++;
        } else{
            r--;
        }
    }
}

console.log(findTargetValue(9));