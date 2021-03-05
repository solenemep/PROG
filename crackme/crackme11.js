// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'GOOD' en éxecutant le programme
let password = ''

const crackme11 = (password) => {
  if (
    password.length === 15 &&
    password[0].charCodeAt() === 84 &&
    password[2].charCodeAt() === 65 &&
    password[5].charCodeAt() === 74 &&
    password.includes('Javascript')) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme11(password)