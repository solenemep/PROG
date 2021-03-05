/*
let dog = {
  name: "Simba"
  color: "black"
  age: 5
}
console.log(dog.name)
console.log(dog["name"])
*/

let dog = new Object()
dog.name = "Simba"
dog.color = "black"
dog.age = 5
dog.aboie = function (nb) {
  while (nb > 0) {
    console.log("wouaf wouaf")
    nb--
  }
}

dog.aboie(5)