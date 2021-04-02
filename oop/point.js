// Définit d'une classe Point
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  distance(point) {
    console.log(Math.pow((Math.pow((point.x - this.x), 2) + Math.pow((point.y - this.y), 2)), 0.5))
  }
}
exports.Point = Point
