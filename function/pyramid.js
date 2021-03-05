// Fonction pure
const showStars = (nbBase, reverse, sign) => {
  let str = ''
  if (reverse) {
    for (i = 1; i <= nbBase; ++i) {
      str += sign.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (i = nbBase; i >= 1; --i) {
      str += sign.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}

// Appel et affichage de la fonction
console.log(showStars(10, true, '+'))