let res1 = (true && false) || (false && true)
// false
let res2 = 10 > 11 && 11 > 10
// false
let res3 = (true || false) && true
// true
let res4 = (!true && !false) || (!false && !false)
// true
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
// true, ERROR 
let res6 = (!(20 >= 20) && 7 === 7) || true
// true
let res7 = '1' === 1 && '2' == 2 && '3' === 3
// false
let res8 = !res7
// true
let res9 = !res8
// false
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
// false || true || true || false = true
let spc = ' '

// Avec concatenation
console.log(res1 + spc + res2 + spc + res3 + spc + res4 + spc + res5 + spc + res6 + spc + res7 + spc + res8 + spc + res9 + spc + res10)

// Avec boucle => CECI EST DE LA METAPROGRAMMATION
// Impossible avec JS
/*
for (let i = 0; i <= 10; i++) {
  console.log(resi)
}
*/