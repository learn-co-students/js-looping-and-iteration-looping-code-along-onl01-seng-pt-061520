// Code your solutions in this file

const names = [ 'Lisa', 'Kaitin', 'Jan'];
const events = ['surprise'];
function writeCards(names, events){
    for (let i=0; i < names.length; i++){
        let cards = []
        cards.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    //return cards;
}

writeCards(names,events);
return cards;

let down = 10;
function countDown(down){
    while(down >= 0){
        console.log(down--);
    }
};