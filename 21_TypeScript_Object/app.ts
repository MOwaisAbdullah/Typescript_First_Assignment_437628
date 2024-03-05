interface item { 
    Name: string ;
    Price: number;
}
const fruit: item = {
    Name:'Banana',
    Price:250
}
const Vegetable: item = {
    Name:'Onion',
    Price:150
}

console.log('Fruit name is',fruit.Name,'and price is', fruit.Price);

console.log('Vegetable name is',Vegetable.Name,'and price is', Vegetable.Price);