/*  Import patern Class Shape */
const Shape = require("./shape.js");

/*  Create a child Class Square, this class inherit Shape Class */
class Square extends Shape {

  /* This method generate a square, and it's called from the parent*/
  render() {
    return `<rect width="300" height="200" fill="${this.shapeColor}"/>`
  }
      
}

module.exports = Square;