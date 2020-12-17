function countDown(num){
  while (num > -1){
    console.log(num);
    num = num - 1;
  }
}

function writeCards(arr){
  let returnArr = []
  for (const element of arr){
    returnArr.push(`Thank you, ${element}, for the wonderful surprise gift!`)
  }
  return returnArr
}