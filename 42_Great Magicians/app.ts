let Magicians: string[]=['Shahid','Khalid','Yousuf','Bilal']
function show_magicians(){
    for(let magician in Magicians){
        console.log(Magicians[magician])
    }
}
function make_great(){
    for(let magician in Magicians){
        Magicians[magician]= 'Great '+ Magicians[magician]
    }
}
make_great()
show_magicians()