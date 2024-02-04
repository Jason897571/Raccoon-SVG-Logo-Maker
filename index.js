const inquirer = require('inquirer');
const fs = require('fs');
// import class from shapes.js
const { Circle, Square, Triangle } = require('./lib/shapes');

// questions for users
const questions = [
{
    type: 'list',
    message: 'Choose the name of the shape',
    choices: ['Triangle', 'Circle', 'Square'],
    name: 'shape'

},
{
    type: 'list',
    name: 'shapeColorChoice',
    message: 'Do you want to choose a color or enter a color code as shape color?',
    choices: ['Choose a color for shape', 'Enter a color code for shape']
},
{
    type: 'list',
    name: 'shapeColor',
    message: 'Choose the color of the shape',
    choices: ['Red','Blue','Green','Yellow','Purple','Orange','Black','White','Pink','Gray'],
    when: (answers) => answers.shapeColorChoice === 'Choose a color for shape' // question depends on the answer above
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the six-digit color code for the shape (e.g., #FFFFFF for white)',
    validate: function(input) {
        // validate the six digit color
        const regex = /^#?[0-9A-Fa-f]{6}$/;
        if (!regex.test(input)) {
            return 'Please enter a valid six-digit color code.';
        }
        return true;
    },
    when: (answers) => answers.shapeColorChoice === 'Enter a color code for shape'
},
{
    type: 'input',
    message: 'Enter the text in the shape',
    name: 'text',
    validate: function(input){
        if(input.length > 3){
            return 'Text should be 3 characters or less. Please enter again.';
        }
        else if(input.length == 0){
            return 'Text should not be empty. Please enter again.';
        }
        return true;
    }
},
{
    type: 'list',
    name: 'textColorChoice',
    message: 'Do you want to choose a color or enter a color code as text color?',
    choices: ['Choose a color for text', 'Enter a color code for text']
},
{
    type: 'list',
    name: 'textColor',
    message: 'Choose the color of the shape',
    choices: ['Red','Blue','Green','Yellow','Purple','Orange','Black','White','Pink','Gray'],
    when: (answers) => answers.textColorChoice === 'Choose a color for text' // question depends on the answer above
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter the six-digit color code for the shape (e.g., #FFFFFF for white)',
    validate: function(input) {
        // validate the six digit color
        const regex = /^#?[0-9A-Fa-f]{6}$/;
        if (!regex.test(input)) {
            return 'Please enter a valid six-digit color code.';
        }
        return true;
    },
    when: (answers) => answers.textColorChoice === 'Enter a color code for text'
}
]

// save example html
const save_html = (html) => {
    fs.writeFile('./examples/index.html', html, (err) => {
        if (err) throw err;
    })
}

const ask_questions = () => {
    inquirer
    .prompt(questions)
    .then((answers) => {

        // shape color cannot be the same as text color, otherwise user cannot see text
        if(answers.shapeColor===answers.textColor){
            console.log('Shape color and text color cannot be the same. Please choose different colors.');
            ask_questions();
        }else{
            if (answers.shape === 'Triangle'){
                const triangle = new Triangle(answers.shape,answers.shapeColor, answers.text, answers.textColor);
                html = triangle.html_generator();
                save_html(html);
            }
            else if (answers.shape === 'Circle'){
                const circle = new Circle(answers.shape,answers.shapeColor, answers.text, answers.textColor);
                html = circle.html_generator();
                save_html(html);
            }
            else if (answers.shape === 'Square'){
                const square = new Square(answers.shape,answers.shapeColor, answers.text, answers.textColor);
                html = square.html_generator();
                save_html(html);
            }
        }
       
    })
}

ask_questions();

