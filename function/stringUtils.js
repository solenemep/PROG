let str1 = 'Hello!'
let str2 = 'WoW'

// Fonction pure d'inversion
const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

// Appel et affichage de l'inversion
console.log(reverseStr(str1))
console.log(reverseStr(str2))

// Fonction pure de vérification
const isPalindrome = (str) => {
  if (str === reverseStr(str)) {
    return true
  } else {
    return false
  }
}

// Appel et affichage de la vérifiaction
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))

// Je souhaite combiner les 2 fonctions
let revpal = []
const strUtil = (str) => {
  let rev = str.split('').reverse().join('')
  if (str === rev) {
    return revpal = [rev, true]
  } else {
    return revpal = [rev, false]
  }
}

// Appel et affichage de la combination
console.log(strUtil(str1))
console.log(strUtil(str2))