"use strict";
let current_users = ['Mirha', 'Owais', 'Uroosa', 'Shahid', 'Khalid'];
let new_users = ['Khalid', 'Shahid', 'Shagufta', 'Faiz', 'Sufiyan'];
for (let x in new_users) {
    if (current_users.includes(new_users[x]))
        console.log('User Name', `${new_users[x]}` + ' is not available, Please select new user name');
    else {
        console.log(`${new_users[x]}` + ' user name is available');
    }
}
