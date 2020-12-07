// Code your solutions in this file
function writeCards(array, event) {
  let temp = []
  for (let i = 0; i < array.length; i++) {
      temp.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!` )
  }
  return temp
}

function countDown(num) {
  while (num > -1) {
    console.log(num)
    num = num - 1
  }
}