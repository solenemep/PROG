let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

function sanitizeString(x) {
  return x.toLowerCase().trim();
}
let sanstr = sanitizeString(str)
console.log(sanstr)

// Determines whether the calling string contains searchString
let searchString = sanstr.includes("bob")
console.log(searchString)