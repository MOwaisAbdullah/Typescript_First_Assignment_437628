"use strict";
let guest = ['Uroosa', 'Mirha', 'Faiz', 'Farha'];
for (let index in guest) {
    console.log('Dear ' + guest[index] + ',' + '\n\nYour are cordially invited to a dinner party tomorrow at 9 O\'clock at Bar B.Q Tonight.\n\nRegards,\n\nM.Owais\n\n');
}
// person name to remove
let Remove_guest = 'Miss Farha';
console.log('\t\t\t\t************ Important Announcement ************I \n\n\tI would like to inform all the guest that due to some unforeseen circumstances ' + `${Remove_guest}` + ' would not be able to join us in dinner party.\n\n');
//this line will remove person 
guest.splice(3, 1, "Mehak");
// lines 10 to 13 is for my own understanding to check new list
//console.log(guest);
//for(let index in guest){
// console.log(guest[index]);
for (let index in guest) {
    console.log('Dear ' + guest[index] + ',' + '\n\nYour are cordially invited to a dinner party tomorrow at 9 O\'clock at Bar B.Q Tonight.\n\nRegards,\n\nM.Owais\n\n');
}
console.log("One good news for all. We have found a more bigger dinner table. So, we are inviting more peoples.\n");
//unshift()	Adds one or more elements to the beginning of the array
guest.unshift('Khalid');
//push()	Adds new elements to the array in the end 
guest.push('Falak');
// add in middle of the array
guest.splice(3, 0, 'Hooriya');
for (let index in guest) {
    console.log('Dear ' + guest[index] + ',' + '\n\nYour are cordially invited to a dinner party tomorrow at 9 O\'clock at Bar B.Q Tonight.\n\nRegards,\n\nM.Owais\n\n');
}
let size = guest.length;
//console.log(size);
console.log('We are inviting total', `${size}`, 'number of people to dinner.\n');
