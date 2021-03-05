let A = true
let B = true

let F = (A && !B) || (!A && B)
let G = (A || B) && !(A && B)

console.log(F)
console.log(G)