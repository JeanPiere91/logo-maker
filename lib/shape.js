/*  Create a parent Class Shape */
class Shape {
    
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape =  shape;
        this.shapeColor = shapeColor;
    }

    /*  Create a method to set Color, it will be inherited for child */
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    
    render() {
        throw new Error('Child class must implement a render() method.');
    }

    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = Shape;