tab = [14, 13, 12, 11, 6, 9, 13, 16, 12]

// On trie le tableau
const sortDescend = (tab) => {
  for (var i = 0; i < tab.length - 1; i++) {
    var min = i
    for (var j = i + 1; j < tab.length; j++) {
      if (tab[j] > tab[min]) {
        min = j
      }
    }
    if (min != i) {
      var target = tab[i]
      tab[i] = tab[min]
      tab[min] = target
    }
  }
  return (tab)
}
console.log(sortDescend(tab))

// On vérifie l'unicité
const makeUnique = (tab) => {
  let newTab = []
  tab.forEach((elem) => {
    if (!newTab.includes(elem)) {
      newTab.push(elem)
    }
  })
  return sortDescend(newTab)
}
console.log(makeUnique(tab))

// On applique les fonction précédentes et ne garde que les 3 premiers du tableau
const podium = (tab) => {
  let newTab = []
  newTab = makeUnique(tab).slice(0, 2)

  /*
  let first = tab[0]
  let second = first
  let third = second
  for (i = 0; i < tab.lenght; i++) {
    if (tab[i] > first) {
      first = tab[i]
      second = first
      third = second
    } else if (tab[i] > second) {
      second = tab[i]
      third = second
    } else if (tab[i] > third) {
      third = tab[i]
    }
  }
  */

  let first = tab[0]
  let second = tab[1]
  let third = tab[2]
  return ['1st : ' + first, '2nd : ' + second, '3rd : ' + third]
}

console.log(podium(tab))
