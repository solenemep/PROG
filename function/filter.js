let newArray = []

// Fonction filter pure
const filter = (fn, array) => {
  for (i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      newArray.push(array[i])
    }
  } return newArray
}

// Fonction que l'on souhaite utiliser dans filter
const sup8 = (nb) => {
  if (!isNaN(nb) && nb >= 8) {
    return true
  } else {
    return false
  }
}

let array = ['j', 's', 8, 3]
console.log(filter(isNaN, array))
console.log(filter(sup8, array))