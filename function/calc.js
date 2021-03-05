// Addition
const add = (nb1, nb2) => {
  return nb1 + nb2
}

// Soustraction
const sub = (nb1, nb2) => {
  return nb1 - nb2
}

// Multiplication
const mul = (nb1, nb2) => {
  return nb1 * nb2
}

// Division
const div = (nb1, nb2) => {
  return nb1 / nb2
}

// Calcul
const calc = (sign, nb1, nb2) => {
  switch (sign) {
    case '+': return add(nb1, nb2)
      break
    case '-': return sub(nb1, nb2)
      break
    case '*': return mul(nb1, nb2)
      break
    case '/': return div(nb1, nb2)
      break
    default:
      return "L'opérateur n'est pas valide"
      break
  }
}

let result = calc('*', 2, 3)
console.log(result)
