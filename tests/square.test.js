const Square = require('../lib/square.js');

describe('Square', () => {
  test('should be an instance of Square class', () => {
      const shape = new Square();
  
      expect(shape).toBeInstanceOf(Square);
  });

  test('should render square', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="300" height="200" fill="blue"/>');
  });
});