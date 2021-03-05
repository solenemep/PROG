let goOut = true
let isRainy = false
let isSunny = false
let temperature = 20
let clothes = ''

// Condition de sortie
if (goOut) {
  clothes += 'underwear, '
  clothes += 'Tshirt, '
} else {
  clothes += 'pyjama, '
}
// Vêtements en fonction de la température
if (goOut && temperature < 15) {
  clothes += 'pants, '
  clothes += 'pullover, '
  clothes += 'coat, '
  clothes += 'leather shoes, '
} else if (goOut && temperature >= 15 && temperature <= 20) {
  clothes += 'pants, '
  clothes += 'sweater, '
  clothes += 'jacket, '
  clothes += 'baskets, '
} else if (goOut && temperature > 20) {
  clothes += 'short, '
  clothes += 'flipflops, '
}
// Accesoires en fonction du temps
if (goOut && isRainy) {
  clothes += 'umbrella, '
}

if (goOut && isSunny) {
  clothes += 'sunglasses, '
  clothes += 'sombrero, '
}
console.log(`It is recommended to wear : ${clothes}`)