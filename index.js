// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];
const eventName = ("birthday");
const cardsarray = [];

function writeCards(names,eventName){
  for (let i = 0; i < names.length; i++) {
  cardsarray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
}
return cardsarray
}

function countDown(num){
  while (num >= 0) {
    console.log(num--);
  }
}