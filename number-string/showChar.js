let phrase = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."

// Amélioration
let intro1 = `Voici un extrait du livre`
let livre = ` Les Amis de Flaubert `
let intro2 = `publié en 1962. Cette phrase de Salammbô contient ${phrase.length} caractères.`
console.log(intro1 + livre.italics() + intro2)

// exo
for (i = 0; i < phrase.length; i++) {
  console.log(`Le caractère ${phrase[i]} est à l'index ${i}.`)
}
