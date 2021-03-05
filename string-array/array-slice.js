let fruits = ["Pomme", "Banane", "Raisin", "Citron", "Kiwi", "Datte"]

/*
console.log(fruits.length)
console.log(fruits[0])

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
*/

fruits.push("Ananas")
console.log(fruits)
console.log(fruits[6])

let exotics = fruits.slice(1, 2) + ' ' + fruits.slice(4, 5) + ' ' + fruits.slice(6, 7)
console.log(exotics)