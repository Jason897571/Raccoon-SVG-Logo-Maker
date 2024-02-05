const inquirer = require('inquirer');
const ask_questions = require('../index.js');

jest.mock('inquirer');

describe('ask_questions', ()=>{
    it('should ask the user the shape and return the shape',async()=>{
        inquirer.prompt.mockResolvedValue({shape: 'Circle', shapeColor: 'Red', textColor: 'Blue', text: 'Hi'});

        const answers = await ask_questions();
        expect(answers.shape).toBe('Circle');
    });
});