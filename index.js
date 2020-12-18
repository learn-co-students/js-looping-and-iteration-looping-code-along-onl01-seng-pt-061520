// Code your solutions in this file

function writeCards(name) {
   let thankYou = []
   for (let i = 0; i < name.length; i++) {
      thankYou.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)  
   }
   return thankYou
}

let number = 10 

function countDown(number) {

   while (number > -1 ) {
      console.log(number);
      number -= 1 ;
   }

}