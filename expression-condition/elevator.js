let elevator = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
let currentFloor = 4
let targetFloor = -2

let floor = currentFloor - targetFloor // quantité d'étages 2
let way = true // true = ascension ; false = descente
floor < 0 ? way = true : way = false

if (floor === 0) {
  console.log(`Vous êtes déjà à l'étage ${targetFloor}`)
} else if (floor < 0) {
  console.log(`Vous êtes à l'étage ${currentFloor}`)
  for (i = currentFloor + 3; i < targetFloor + 2; i++) {
    console.log(`Vous voici à l'étage ${elevator[i]}`)
  } console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
} else if (floor > 0) {
  console.log(`Vous êtes à l'étage ${currentFloor}`)
  for (i = currentFloor + 1; i > targetFloor + 2; i--) {
    console.log(`Vous voici à l'étage ${elevator[i]}`)
  } console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
}

// Avec switch
switch (targetFloor) {
  case -2:
    currentFloor === -2 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case -1:
    currentFloor === -1 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case -0:
    currentFloor === 0 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case 1:
    currentFloor === 1 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case 2:
    currentFloor === 2 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case 3:
    currentFloor === 3 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case 4:
    currentFloor === 4 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case 5:
    currentFloor === 5 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case 6:
    currentFloor === 6 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  case 7:
    currentFloor === 7 ? console.log(`Vous êtes déjà à l'étage ${targetFloor}`) : console.log(`Vous êtes arrivé à l'étage ${targetFloor}`)
    break
  default:
    console.log(`L'étage ${targetFloor} est inexistant`)
}