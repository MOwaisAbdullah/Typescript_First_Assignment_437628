"use strict";
// NAME IN LOWER CASE:
let lowerName = "UROOSA";
console.log(lowerName.toLowerCase());
// NAME IN UPPER CASE:
let upperName = "uroosa";
console.log(upperName.toUpperCase());
// NAME IN TITLE CASE
let x = "uroOSA iS veRY inteGENT giRL anD veRY briGHT stuDENT.";
let y = x.toLowerCase().replace(/\b\w/g, function (z) {
    return z.toUpperCase();
});
console.log(y);
