const Shape = require("./shape.js");

class Square extends Shape {

  render() {
    return `<rect width="300" height="200" fill="${this.shapeColor}"/>`
  }
      
}

module.exports = Square;