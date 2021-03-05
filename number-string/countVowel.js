let txt = "Je suis le ténébreux, - le veuf, - l'inconsolé,\nLe prince d'Aquitaine à la tour abolie:\nMa seule étoile est morte, - et mon luth constellé\nPorte le soleil noir de la Mélancolie.\n\nDans la nuit du tombeau, toi qui m'as consolé,\nRends - moi le Pausilippe et la mer d'Italie,\nLa fleur qui plaisait tant à mon cœur désolé,\nEt la treille où le pampre à la rose s'allie.\n\nSuis - je Amour ou Phébus ? ...Lusignan ou Biron ?\nMon front est rouge encor du baiser de la reine;\nJ'ai rêvé dans la grotte où nage la sirène...\n\nEt j'ai deux fois vainqueur traversé l'Achéron;\nModulant tour à tour sur la lyre d'Orphée\nLes soupirs de la sainte et les cris de la fée."

let counter = 0
let vowel = ['a', 'e', 'i', 'o', 'u', 'y']
let VOWEL = ['A', 'E', 'I', 'O', 'U', 'Y']

for (v = 0; v < vowel.length; v++) {
  for (i = 0; i < txt.length; i++) {
    if (txt[i] === vowel[v]) {
      counter++
    }
    else if (txt[i] === VOWEL[v]) {
      counter++
    }
  }
}
console.log(counter)

