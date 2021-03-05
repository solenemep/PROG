// Programme qui va m'aider à décider si je dois mettre mon manteau ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = false
let isWindy = false
let T = 17

if (T <= 15) {
  console.log('You will need a coat')
} else if (T <= 20) {
  if (isRainy || isWindy) {
    console.log('You should wear a coat')
  } else {
    console.log('You may not need a coat')
  }
} else {
  console.log('You will not need a coat')
}

// Equilvalent
if (T <= 15) {
  console.log('You will need a coat')
} else if (T <= 20 && (isRainy || isWindy)) {
  console.log('You should wear a coat')
} else if (T <= 20 && !isRainy && !isWindy) {
  console.log('You may not need a coat')
} else {
  console.log('You will not need a coat')
}