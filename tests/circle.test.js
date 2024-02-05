const Circle = require('../lib/circle.js');

describe('Circle', () => {
  test('should be an instance of Circle class', () => {
      const shape = new Circle();

      expect(shape).toBeInstanceOf(Circle);
  });

  test('should render circle', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});