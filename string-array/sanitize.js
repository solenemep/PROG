let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

function sanitizeString(x) {
  return x.toLowerCase().trim();
}
console.log(sanitizeString(str))

// OU
let lowstr = str.toLowerCase()
// console.log(lowstr)
let sanstr = lowstr.trim()
console.log(sanstr)

// OU
console.log(str.toLowerCase().trim())