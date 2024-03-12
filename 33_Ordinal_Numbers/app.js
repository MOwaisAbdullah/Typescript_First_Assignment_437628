"use strict";
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (let num in ordinalNumbers) {
    if (ordinalNumbers[num] === 1) {
        console.log(ordinalNumbers[num] + 'st');
    }
    else if (ordinalNumbers[num] === 2) {
        console.log('2nd');
    }
    else if (ordinalNumbers[num] === 3) {
        console.log('3rd');
    }
    else {
        console.log(ordinalNumbers[num] + 'th');
    }
}
