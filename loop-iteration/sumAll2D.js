let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
]
let sum = 0

for (i = 0; i < tab.length; i++) {
  for (j = 0; j < tab[i].length; j++) {
    sum += tab[i][j]
  }
}
console.log(sum)