// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let r = ""
	//loop through word backwards (starting highest)
	for(var i = str.length; i--;){
		r = r + str[i]

	}
	return r
	//creating new word (backwards)
}

module.exports = reverse;
