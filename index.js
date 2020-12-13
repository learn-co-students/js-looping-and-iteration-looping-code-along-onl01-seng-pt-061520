// Code your solutions in this file
function writeCards(names, eventName) {
    let writeCardsArray = []
    for (let i = 0; i < names.length; i++) {
        writeCardsArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!` )
    }
    return writeCardsArray
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber)
}