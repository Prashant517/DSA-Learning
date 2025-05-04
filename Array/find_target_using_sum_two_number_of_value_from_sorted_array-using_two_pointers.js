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

const inputArr = [2,3,5,7,11];
let n = inputArr.length;
let target = 9;
let countLoop = 0;

console.log('using Two pointer Method')

function findTargetValue(target){
    let numbers = [];
    let i = 0;
    let j = n-1;
    while(i<j){
        countLoop++;
        if(inputArr[i]+inputArr[j] == target){
            numbers[0] = i;
            numbers[1] = j;

            console.log("count how many loops : "+ countLoop);
            return numbers;
        }
        else if (inputArr[i]+inputArr[j] < target){
            i++;
        }
        else{
            j--;
        }
    }

    return false;
}


console.log(findTargetValue(12)); //output (0,1)
