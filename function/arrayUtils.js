// Fonction pure biggest
const biggest = (array) => {
  let sup = array[0] // Si = 0 la fonction n'est pas générique
  for (i = 0; i < array.length; i++)
    if (array[i] > sup) {
      sup = array[i]
    } else {
      sup = sup
    }
  return sup
}

// Fonction pure sortAscend
const sortAscend = (array) => {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        el = array[j + 1]
        array[j + 1] = array[j]
        array[j] = el
      }
    }
  }
  return (array)
}

// Avec utilisation de la méthode sort
/*
const sortAscend = (array) => {
  return array.sort((a, b) => {return a - b})
}
*/

// Méthodes Panos et Jon, plus intuitives
/*
const sortAscend = (array) => {
  for (let current = 1; current < array.length; current++) {
    // previous > -1 means current > 0
    for (let previous = current - 1; previous > -1; previous--) {
      // ascending order = previous is lower than next
      // if previous is greater than previous
      // Swap previous with current
      if (array[previous + 1] < array[previous]) {
        ;[array[previous + 1], array[previous]] = [array[previous], array[previous + 1]]
      }
    }
  }
  return array
}
*/
/*
const sortAscend = (array) => {
  let tmp = array[0]
  for(i = 0; i < array.length; i++) {
    if(array[i] > array[i + 1]){
      tmp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = tmp
      i = -1
    } 
  }
  return array
}
*/

// Fonction pure makeUnique
const makeUnique = (array) => {
  let newArray = []
  array.forEach((elem) => {
    if (!newArray.includes(elem)) {
      newArray.push(elem)
    }
  })
  // ne fonctionne pas ??
  /*
  for (i = 0; i < array.lenght; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i])
    }
  }*/
  return sortAscend(newArray)
}

// Avec utilisation des méthodes from // set
/*
const makeUnique = (array) => {
  return sortAscend(Array.from(new Set(array)))
}
*/

let array = [1, 2, 3, 4, 4, 5, 2, 8, 2, 3, 6, 10, 6, 8, 9, 2, 5]
console.log(biggest(array))
console.log(sortAscend(array))
console.log(makeUnique(array))