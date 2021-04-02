let maj = (age) => {
  return age - 18
}

const information = (firstName, surName, age) => {
  console.log('prénom : ' + firstName)
  console.log('nom : ' + surName)
  console.log('age : ' + age)
  console.log((maj(age) < 0 ? 'Vous serez majeur dans ' : 'Vous êtes majeur depuis ') + Math.abs(maj(age)) + ' ans.')
}

information('Solène', 'Pettier', 28)
information('Alice', 'Liddell', 7)