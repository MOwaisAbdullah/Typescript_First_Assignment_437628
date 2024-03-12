let userName: string[]=['admin','owais','uroosa','mirha','faiz','shagufta','farah'];
let msg = 'Thank you for logging in again.';
let adminmsg ='Would you like to see a status report?'


for(let user in userName)
{

   if((userName[user]) =='admin')

   {console.log('Hello',`${userName[user]}`+', '+`${adminmsg}`)}

   else {console.log('Hello',`${userName[user]}`+', '+`${msg}`)}
}

