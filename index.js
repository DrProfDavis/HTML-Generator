// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
function questions() {
    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'city',
        },
        {
            type: 'input',
            message: 'What is your favorite hobby?',
            name: 'hobby',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
    ])
    .then((response) =>
    writeToFile(markdown(response))
    );
};


// TODO: Create a function to write README file
function writeToFile(info) {
    fs.appendFile('index.html', `${info}\n`, (err) =>

        err ? console.error(err) : console.log('Successfully wrote to html')
    );
}

// TODO: Create a function to initialize app
function init() {

    questions()
}

// Function call to initialize app
init();



