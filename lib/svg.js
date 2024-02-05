const Shape = require("./shape");
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

function createSVG(text, textColor, shape, shapeColor) {
    
  const shapeObject = shape === "square" ? new Square() : 
                (shape === "triangle" ? new Triangle() : new Circle());

  shapeObject.setColor(shapeColor);

  return new Shape(text, textColor, shapeObject, shapeColor).renderSVG();

}

module.exports = { createSVG };