// Code your solutions in this file
function writeCards(cardNames, eventName) {
   let arrayReturn = []
    for (let i = 0; i < cardNames.length; i++) {
        arrayReturn.push(`Thank you, ${cardNames[i]}, for the wonderful ${eventName} gift!`);
      }
     return arrayReturn
  }
  function countDown(number){
  let count = 0;
  while (count < number+1) {
    console.log(count++);
  }
}