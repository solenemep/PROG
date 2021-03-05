// Fonction forEach avec side-effect
const forEach = (fn, array) => {
  for (i = 0; i < array.length; i++)
    console.log(fn(array[i]))
}

// Fonction que l'on souhaite utiliser dans forEach
const capitalize = (str) => {
  return str.toUpperCase()
}

let array = ['j', 's']
forEach(capitalize, array)
