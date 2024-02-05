const CLI = require('../lib/cli.js');

describe('CLI', () => {
  test('should be an instance of Cli class', () => {
    const cli = new CLI();
    
    expect(cli).toBeInstanceOf(CLI);
  });
});