// Jérémie crackme11
let password = 'ssapTdrow'

const crackme11 = (password) => {
  let tmp1 = password.split('').slice(0, 4).reverse().join('')
  let tmp2 = password.split('').slice(-4).reverse().join('')
  if (tmp1 + tmp2 === 'password' && password.length > 8) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme11(password)


// Panos crackme13 
let password = 'T20aTaTaTaTaTeTeT.eTeTeTuTuTuTuTuT'
let pass = false

const crackme13 = password => {
  ['a', 'e', 'u'].forEach(el => {
    if (password.split(el).length - 1 > 3) { // length >= 5 : il doit y avoir au moins 5 séparateurs 'a' && 'e' && 'u'
      if (parseInt(password.slice(1, 3), 10) % 2 === 0 && password.split('.').length === 2) { // password slice en base 10 est multiple de 2 et contient un '.'
        pass = true
      }
    }
  })

  if (pass) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme13(password)
