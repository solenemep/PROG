// Fonction pure isOdd
const isOdd = (nb) => {
  if (!isNaN(nb) && nb % 2 !== 0) {
    return true
  } else {
    return false
  }
}

// Appel et affichage de isOdd
console.log(isOdd(5))
console.log(isOdd(2))
console.log(isOdd('j'))

// Fonction pure isEven
const isEven = (nb) => {
  if (!isNaN(nb) && !isOdd(nb)) {
    return true
  } else {
    return false
  }
}

// OU 
/*
const isEven = (nb) => {
  return !isOdd(nb)
} 
*/

// Appel et affichage de isEven
console.log(isEven(5))
console.log(isEven(2))
console.log(isEven('j'))