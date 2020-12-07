// Code your solutions in this file
function writeCards(invitedNames, eventName) {
	let messages = [];
	for (let i = 0; i < invitedNames.length; i++) {
		messages.push(`Thank you, ${invitedNames[i]}, for the wonderful ${eventName} gift!`);
	}
	return messages;
}

function countDown(n) {
	while (n > -1) {
		console.log(n);
		n--;
	}
}