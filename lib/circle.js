/*  Import patern Class Shape */
const Shape = require("./shape.js");

/*  Create a child Class Circle, this class inherit Shape Class */
class Circle extends Shape {

  /* This method generate a circle, and it's called from the parent*/
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;