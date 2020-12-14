// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"]
let namesArray = []

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {

        namesArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return namesArray
}

function countDown(int) {
let count = int
    while (count >= 0) {
        console.log(count--)
    }
}