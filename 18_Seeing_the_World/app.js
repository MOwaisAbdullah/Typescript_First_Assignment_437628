"use strict";
let originalList = ['Madina', 'Makka', 'London', 'Canada', 'Australia'];
console.log(originalList); //Print your array in its original order.
let sorted = originalList.slice().sort(); //this will sort the array
console.log(sorted); //Print your array in alphabetical order without modifying the actual list.
console.log(originalList); //Print your array in its original order.
let reverseList = originalList.slice().reverse(); //array in reverse alphabetical order without changing the order of the original list.
console.log(reverseList); // array in reverse alphabetical order without changing the order of the original list.
console.log(originalList); //Print your array in reverse alphabetical order without changing the order of the original list.
console.log(originalList.reverse()); //Reverse the order of your list. 
console.log(originalList); //Print the array to show that its order has changed.
let reverseOrig = originalList.reverse(); //Reverse the order of your list again
console.log(reverseOrig); //Print the list to show it’s back to its original order.
let a = originalList.sort(); //Sort your array so it’s stored in alphabetical order. 
console.log(a); //Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let b = originalList.reverse();
console.log(b);
