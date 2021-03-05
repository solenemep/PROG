// Fonction pure
const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return nb_monocycle * 1 + nb_moto * 2 + nb_voiture * 4 + nb_limousine * 6
}

let count1 = countWheels(10, 20, 7, 2)
let count2 = countWheels(2, 3, 4, 5)

console.log(count1)
console.log(count2)
