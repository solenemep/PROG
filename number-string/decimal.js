let a = 0x123
let b = 0123
let c = 0b10011001
let d = 0xdeadbeef
let e = 0xea7beef
let f = 0b1111111111111111
let g = 0777

console.log(a.toString())
console.log(b.toString())
console.log(c.toString())
console.log(d.toString())
console.log(e.toString())
console.log(f.toString())
console.log(g.toString())

// OU
function deci(x) {
  return console.log(x.toString())
}

deci(a)
deci(b)
deci(c)
deci(d)
deci(e)
deci(f)
deci(g)
