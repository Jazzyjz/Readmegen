// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');

const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile('README.md',data, (error,data) =>
     error? console.error(error) : console.log(data));
 }

// TODO: Create a function to initialize app
function init() {
    const data =  inquirer.prompt(questions);
}


// Function call to initialize app
init();
