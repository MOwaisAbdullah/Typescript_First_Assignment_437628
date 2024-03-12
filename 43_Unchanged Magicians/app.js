"use strict";
let Magicians = ['Shahid', 'Khalid', 'Yousuf', 'Bilal'];
function show_magicians() {
    for (let magician in Magicians) {
        console.log(Magicians[magician]);
    }
}
show_magicians();
let list_great = []; // this list will hold Great word with magiacian names.
//this function will add great word in magicians name and will store in list_great
function make_great() {
    for (let magician in Magicians) {
        list_great.push('Great ' + Magicians[magician]);
    }
}
make_great();
//console.log(list_great)  this is to just verify that new list is created with function 
function show_great_magicians() {
    for (let a in list_great) {
        console.log(list_great[a]);
    }
}
show_great_magicians();
