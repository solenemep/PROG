// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'GOOD' en éxecutant le programme
let password = ''

const crackme12 = (password) => {
  if (
    password.substr(2, 3) == 'tDe' &&
    password.substr(-10, 2) == 'Mo' &&
    password.endsWith('sse')) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme12(password)