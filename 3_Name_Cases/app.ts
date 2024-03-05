// NAME IN LOWER CASE:

let lowerName: string="UROOSA";
console.log(lowerName.toLowerCase());

// NAME IN UPPER CASE:

let upperName: string="uroosa";
console.log(upperName.toUpperCase());


// NAME IN TITLE CASE // sentence in title case
let x: string="uroOSA iS veRY inteGENT giRL anD veRY briGHT stuDENT."
let y: string= x.toLowerCase().replace(/\b\w/g,function(z){
    return z.toUpperCase()
});

console.log(y);
