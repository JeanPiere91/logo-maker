/*  Import patern Class Shape */
const Shape = require("./shape.js");

/*  Create a child Class Triangle, this class inherit Shape Class */
class Triangle extends Shape {

  /* This method generate a triangle, and it's called from the parent*/
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
  }
}

module.exports = Triangle;