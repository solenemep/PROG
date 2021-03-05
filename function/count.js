// Fonction avec side-effect
const count = (min, max, step) => {
  for (i = min; i <= max; i += step) {
    console.log(i)
  }
}
count(2, 6, 1)