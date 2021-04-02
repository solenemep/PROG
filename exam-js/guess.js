let secret = 8
let userGuess = 2

if (!isNaN(userGuess) && userGuess < secret) {
  console.log('Too small!')
} else if (!isNaN(userGuess) && userGuess > secret) {
  console.log('Too big!')
} else if (!isNaN(userGuess) && userGuess === secret) {
  console.log('You win')
} else {
  console.log("Le userGuess n'est pas un nombre.")
}