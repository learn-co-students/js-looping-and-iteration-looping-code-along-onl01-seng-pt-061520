
function writeCards(name, birth) {
    let array = []
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${birth} gift!`);
    }
     
    return array
    
}

function countDown() {
    let num = 10
    while (num >= 0) {
        console.log(num--)
    }
    return num
}