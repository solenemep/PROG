function Dog(name, color, age, noise) {
  this.name = name
  this.color = color
  this.age = age
  this.noise = noise
  this.aboie = function () {
    console.log(this.noise + ' ' + this.name)
  }
}

let caniche = new Dog("Bibou", "white", 3, "wif")
let bouvier = new Dog("Simba", "black", 5, "wouf")
let epagneul = new Dog("Rio", "brown", 1, "waf")

/*
console.log(caniche)
console.log(bouvier)
console.log(epagneul)
*/

caniche.aboie()
bouvier.aboie()
epagneul.aboie()