var Magicians = ['Shahid', 'Khalid', 'Yousuf', 'Bilal'];
function show_magicians() {
    for (var magician in Magicians) {
        console.log(Magicians[magician]);
    }
}
function make_great() {
    for (var magician in Magicians) {
        Magicians[magician] = 'Great ' + Magicians[magician];
    }
}
make_great();
show_magicians();
