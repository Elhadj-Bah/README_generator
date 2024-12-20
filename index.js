// TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// 

// TODO: Create an array of questions for user input

// Define an array of questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'MPL 2.0', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests for this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data ,(err) => {
        err ? console.log(err) : console.log('SAMPLE_README.md has been generated!');
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
       const markdownContent = generateMarkdown(answers);
       writeToFile('SAMPLE_README.md', markdownContent);

    });
}

// Function call to initialize app
init();
