/*29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruit: string []=['Banana','Apple','Orange'] ;
if(favorite_fruit.includes('Apple')){
    console.log('You really like Apples!')
}
if(favorite_fruit.includes('Banana')){
    console.log('You really like Bananas!')
}
if(favorite_fruit.includes('Orange')){
    console.log('You really like Oranges!')
}
if(favorite_fruit.includes('Grapes')){
    console.log('You really like grapes!')
}
if(favorite_fruit.includes('Watermelon')){
    console.log('You really like Watermelon!')
}