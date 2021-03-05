// Déclaration d'un nouveau type Player que l'on utilisera
// dans notre programme, probablement un jeu
class Player {
  constructor(name, race) {
    this.name = name
    this.posX = 0
    this.posY = 0
    if (race === 'human') {
      this.race = 'human'
      this.hp = 100
      this.mp = 100
    } else if (race === 'elf') {
      this.race = 'elf'
      this.hp = 80
      this.mp = 120
    } else if (race === 'orc') {
      this.race = 'orc'
      this.hp = 120
      this.mp = 80
    } else if (race === 'undead') {
      this.race = 'undead'
      this.hp = 90
      this.mp = 110
    } else {
      this.race = 'troll'
      this.hp = 110
      this.mp = 90
    }
  }
  // Méthode qui retourne une string contenant des informations sur le joueur
  info() {
    return `name: ${this.name}\nrace: ${this.race}\nhp: ${this.hp}\nmp: ${this.mp}`
  }
  // Méthode pour déplacer sur l'axe x le joueur
  moveX(nb) {
    this.posX += nb
  }
  // Méthode pour déplacer sur l'axe y le joueur
  moveY(nb) {
    this.posY += nb
  }
  // Méthode qui retourne une string contenant la position du joueur
  position() {
    return `Position: (${this.posX}, ${this.posY})`
  }
}

// Le programme commence

// Instanciation d'une class Player
// On dit que player1 est une instance de la classe Player
const player1 = new Player('AbsoluteVirtue', 'elf')
const player2 = new Player('DeafKnightHaX0r', 'undead')
const player3 = new Player('Elfie', 'elf')
const player4 = new Player('Orcador', 'orc')
const player5 = new Player('Trollyz', 'troll')

// Utilisations des méthodes de la classe Player
console.log(player1.info())
console.log(player1.position())
player1.moveX(10)
player1.moveY(5)
// Message destiné au développeur, pour tester son programme
console.log('DEBUG: Position après avoir effectué un mouvement:')
console.log(player1.position())