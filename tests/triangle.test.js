const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {

  test('should be an instance of Triangle class', () => {
      const shape = new Triangle();
    
      expect(shape).toBeInstanceOf(Triangle);
  });

  test('should render triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});