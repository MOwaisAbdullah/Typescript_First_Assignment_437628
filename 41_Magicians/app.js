"use strict";
let Magicians = ['Shahid', 'Khalid', 'Yousuf', 'Bilal'];
function show_magicians() {
    for (let magician in Magicians) {
        console.log(Magicians[magician]);
    }
}
show_magicians();
