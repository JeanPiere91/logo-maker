const Shape = require('../lib/shape.js');

describe('Shape', () => {
  test('should be an instance of Shape class', () => {
    const shape = new Shape();
    
    expect(shape).toBeInstanceOf(Shape);
  });
});

describe('Shape', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shape();
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render).toThrow(err);
  });
});