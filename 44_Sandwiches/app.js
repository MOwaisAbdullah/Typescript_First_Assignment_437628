"use strict";
/*44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
  and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.*/
function make_sandwich(...ingredients) {
    console.log('Dear Customer, following ingredient(s) will be added in your sandwich as per your choice.');
    for (let items in ingredients)
        console.log(ingredients[items]);
}
make_sandwich('Ketchup', 'Smoked Chicken', 'Cheese', 'Cucumber');
console.log('\n');
make_sandwich('Tomatos', 'Cucumber', 'Kabab', 'Ketchup', 'Mayonese', 'Lettuce');
console.log('\n');
make_sandwich('Ketchup', 'Grilled Chicken', 'Cheese', 'Cucumber', 'Pizza Sauce');
