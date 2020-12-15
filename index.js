// Code your solutions in this file

function writeCards(array, event) {
  let thankYouMessages = []
  for (var i = 0; i < array.length; i++) {
    thankYouMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }

  return thankYouMessages;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int--;
  }
}
