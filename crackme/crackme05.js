// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'GOOD' en éxecutant le programme
let password = '4321drowssap'

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme5(password)