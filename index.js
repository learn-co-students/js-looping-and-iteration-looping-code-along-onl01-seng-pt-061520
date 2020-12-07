// Code your solutions in this file

// WRITE CARDS

function writeCards(names) {
    let bday_message = [];
    for (let i = 0; i < names.length; i++) {
        bday_message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return bday_message;
}

// COUNTDOWN

function countDown(num) {
    while(num >= 0) {
        console.log(num--)
    }
}

// function countDown() {
//     let countDown = 0;
//     while (countDown < 11) {
//         console.log(countDown++);
//     }
// }