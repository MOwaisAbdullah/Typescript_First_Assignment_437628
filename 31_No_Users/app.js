var userName = []; //'admin','owais','uroosa','mirha','faiz','shagufta','farah'
var msg = 'Thank you for logging in again.';
var adminmsg = 'Would you like to see a status report?';
if (userName.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (var user in userName) {
        if ((userName[user]) == 'admin') {
            console.log('Hello', "".concat(userName[user]) + ', ' + "".concat(adminmsg));
        }
        else {
            console.log('Hello', "".concat(userName[user]) + ', ' + "".concat(msg));
        }
    }
}
