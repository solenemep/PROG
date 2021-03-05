const RATIO = 1.60934

// Fonction avec side-effect
const convertMiToKm = (dist) => {
  return dist * RATIO
}

let inMile = 500
let inKm = convertMiToKm(inMile)
console.log(`La distance ${inMile}miles équivaut à ${inKm}km.`)