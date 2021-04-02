// object literal alice
const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['JavaScript', 'PHP'],
}
// object literal bob
const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['HTML', 'CSS'],
}
// object literal charlie
const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Solidity', 'Perl', 'C++'],
}

// fonction printInfo
const printInfo = (object) => {
  console.log(object)
  // ou
  console.log(object.firstName)
  console.log(object.lastName)
  console.log(object.age)
}
printInfo(alice)

// fonction canVote
const canVote = (object) => {
  if (object.age >= 18) {
    console.log(object.firstName + ' ' + object.lastName + ' can vote.')
  } else {
    console.log(object.firstName + ' ' + object.lastName + ' can not vote.')
  }
}
canVote(alice)
canVote(charlie)

// fonction comparative
const mostSkilledDev = (object1, object2) => {
  if (object1.language.length > object2.language.length) {
    console.log(object1.firstName + ' knows more programming languagues than ' + object2.firstName)
  } else if (object2.language.length > object1.language.length) {
    console.log(object2.firstName + ' knows more programming languagues than ' + object1.firstName)
  } else {
    console.log('draw')
  }
}
mostSkilledDev(alice, bob)
mostSkilledDev(alice, charlie)
mostSkilledDev(bob, charlie)