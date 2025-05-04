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

const inputArr = [2,3,5,7,11];
let n = inputArr.length;
const target = 9;

console.log('using Bruteforce Method')

let numbers = [];
for (let i = 0; i <= (n-2); i++){
    for (let j = i+1; j <= (n-1); j++){
        if(inputArr[i]+inputArr[j] == target){
            numbers[0] = i;
            numbers[1] = j;
        }
    }
}

console.log(numbers); //output (0,3)
