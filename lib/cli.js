const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./svg');

class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo',        
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color',
        },
      ])
      .then(({ text, textColor, shape, shapeColor }) => {
        console.log(__dirname);
        return writeFile(
          join(__dirname, '..', 'examples', 'logo.svg'),
          createSVG(text, textColor, shape, shapeColor)
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
