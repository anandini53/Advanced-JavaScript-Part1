/**
 * You are given an array of numbers named myArray. Create a function that takes any number of arguments 
and adds them to the existing array. Use the spread and rest operator.
 */

// Create an array of numbers

let myArray = [2, 4, 6, 8]

// Create a function that takes any number of arguments and adds them to the existing array

function addToArray(...newNumbers) {        // Rest operator
    myArray = [...myArray, ...newNumbers];      // Spread operator
    return myArray;
}

console.log(addToArray(10, 12));