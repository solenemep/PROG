let txt = "Je suis le ténébreux, - le veuf, - l'inconsolé,\nLe prince d'Aquitaine à la tour abolie:\nMa seule étoile est morte, - et mon luth constellé\nPorte le soleil noir de la Mélancolie.\n\nDans la nuit du tombeau, toi qui m'as consolé,\nRends - moi le Pausilippe et la mer d'Italie,\nLa fleur qui plaisait tant à mon cœur désolé,\nEt la treille où le pampre à la rose s'allie.\n\nSuis - je Amour ou Phébus ? ...Lusignan ou Biron ?\nMon front est rouge encor du baiser de la reine;\nJ'ai rêvé dans la grotte où nage la sirène...\n\nEt j'ai deux fois vainqueur traversé l'Achéron;\nModulant tour à tour sur la lyre d'Orphée\nLes soupirs de la sainte et les cris de la fée."

let counter = 0
let e = 'e'

for (i = 0; i < txt.length; i++) {
  if (txt[i] === e.toUpperCase()) {
    counter++
  }
  else if (txt[i] === e.toLowerCase()) {
    counter++
  }
}
console.log(counter)

// Pas besoin de créer la variable e
for (i = 0; i < txt.length; i++) {
  if (txt[i].toUpperCase === 'E') {
    counter++
  }
  else if (txt[i].toLowerCase === 'e') {
    counter++
  }
}
console.log(counter)
