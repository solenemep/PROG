class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    console.log(this.firstName, this.lastName, this.age, this.language)
  }
  canVote() {
    if (this.age >= 18) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
  mostSkilledDev(Human) {
    if (this.language.length > Human.language.length) {
      console.log(this.firstName)
    } else if (Human.language.length > this.language.length) {
      console.log(Human.firstName)
    } else {
      console.log('draw')
    }
  }
}
exports.Human = Human