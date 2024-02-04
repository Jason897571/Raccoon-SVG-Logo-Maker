const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

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

save_html = (html) => {
    fs.writeFile('./examples/index.html', html, (err) => {
        if (err) throw err;
    })
}


inquirer
    .prompt(questions)
    .then((answers) => {
        if (answers.shape === 'Triangle'){
            const triangle = new Triangle(answers.shape,answers.shapeColor, answers.text, answers.textColor);
            html = triangle.html_generator();
            save_html(html);
        }
        else if (answers.shape === 'Circle'){
            const circle = new Circle(answers.shape,answers.shapeColor, answers.text, answers.textColor);
            html = circle.html_generator();
        }
        else if (answers.shape === 'Square'){
            const square = new Square(answers.shape,answers.shapeColor, answers.text, answers.textColor);
            html = square.html_generator();
        }
    })