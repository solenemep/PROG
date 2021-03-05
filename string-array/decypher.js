let crypt = 'MJWJ HTRJX YMJ XZS'
//'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let decrypt = ''

// Le décalage doit être identifié manuellement (pas de dictionnaire)
let key = 8

for (i = 0; i < crypt.length; i++) {
  if (crypt[i] !== ' ') {
    // On récupère le code ascii de chaque caractère
    let cryptAscii = crypt.charCodeAt(i)
    // On ajoute a chaque code ascii (de chaque caractère), la clé
    let code = (((cryptAscii - 65) + key) % 26) + 65
    // On retranscrit le code en string
    decrypt = decrypt + String.fromCharCode(code)
  }
  else {
    decrypt = decrypt + crypt[i]
  }
}
console.log(decrypt)