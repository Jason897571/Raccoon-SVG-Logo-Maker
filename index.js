const inquirer = require('inquirer');

const questions = [
{
    type: 'list',
    message: 'Choose the name of the shape',
    choices: ['Triangle', 'Circle', 'Square'],
    name: 'shape'

},
{
    type: 'input',
    message: 'Enter the color of the shape',
    name: 'shapeColor'
},
{
    type: 'input',
    message: 'Enter the text in the shape',
    name: 'text'
},
{
    type: 'input',
    message: 'Enter the text color',
    name: 'textColor'
}
]

inquirer
    .prompt(questions)