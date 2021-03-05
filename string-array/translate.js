let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

// Programme original
str
  .trim()
  .toUpperCase()
  .split(' ')
  .forEach((elem) => console.log(`mot: ${elem}`))

// Nouveau programme
// On assainit et split
function sanitizeString(x) {
  return x.toUpperCase().trim().split(' ')
}
let array = sanitizeString(str)
// On imprime sur la console
// boucle for
for (let i = 0; i < array.length; ++i) {
  console.log(`mot: ${array[i]}`)
}
// for...of
for (let elem of array) {
  console.log(`mot: ${elem}`)
}
// forEach
array.forEach((elem) => {
  console.log(`mot: ${elem}`)
})