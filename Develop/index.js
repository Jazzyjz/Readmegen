// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");


// TODO: Create a function to write README file
function writeToFile('README.md', data) {};

// TODO: Create a function to initialize app
function init() {
    try{const answers =  inquirer.prompt(questions);
    // answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers)
 fs.writeFile("created-README.md", readMeData);
} catch(err){
    throw err;
}
}

// Function call to initialize app
init();
