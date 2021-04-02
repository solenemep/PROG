const { Human } = require('./classInfo')
const { Point } = require('./point')

// instances de Human
const alice = new Human('Alice', 'Liddell', 28, ['JavaScript', 'PHP'])
const bob = new Human('Bob', 'Lemon', 30, ['HTML', 'CSS'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Solidity', 'Perl', 'C++'])

alice.printInfo()
bob.printInfo()
bob.canVote()
charlie.canVote()
charlie.mostSkilledDev(alice)
alice.mostSkilledDev(bob)

// instances de Point
const p0 = new Point(0, 0)
const px = new Point(1, 0)
const py = new Point(0, 1)

px.distance(p0)
py.distance(p0)
px.distance(py)
