"use strict";
function make_shirt(a, msg = 'I love typescript') {
    console.log('Shirt size is ' + a + '.', 'Shirt will also have a printed message as below.\n', msg + '.');
}
make_shirt('Large');
make_shirt('Medium');
make_shirt('Small', 'Happy Independence Day');
