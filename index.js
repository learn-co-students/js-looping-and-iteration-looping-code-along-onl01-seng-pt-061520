// Code your solutions in this file

const names = [ 'Lisa', 'Kaitin', 'Jan'];
const events = ['surprise'];
function writeCards(names, events){
    for (let i=0; i < names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    //return names;
}

writeCards(names,events);