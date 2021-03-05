let decrypt = 'HERE COMES THE SUN'
let crypt = ''

// Le décalage est choisi arbitrairement
let key = 8

for (i = 0; i < decrypt.length; i++) {
  // Si il s'agit d'un caractère
  if (decrypt[i] !== ' ') {
    // On traduit chaque caractère en son code acsii
    let decryptAscii = decrypt.charCodeAt(i)
    // On ajoute a chaque code ascii (de chaque caractère), la clé
    let code = (((decryptAscii - 65) - key) % 26) + 65
    // On retranscrit le code en string
    crypt = crypt + String.fromCharCode(code)
    //console.log(String.fromCharCode(code))
  }
  // Si il s'agit d'un espace on affiche l'espace
  else {
    crypt = crypt + decrypt[i]
    //console.log(msg[i])
  }
}
console.log(crypt)