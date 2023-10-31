// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');

const generateMarkdown = require("./utils/generateMarkdown");

//TODO: create an array of questions for user input

const questions = [
        {
          type: "input",
          name: "title",
          message: "What is the title of your project?",
        },
        {
          type: "input",
          message: "Please enter a short description of your project:",
          name: "description",
        },
        {
          type: "input",
          message: "Provide instructions for use...",
          name: "usage",
        },
        {
          type: "input",
          message: "List the collaborators for your project.",
          name: "credits",
        },
        {
          type: "input",
          message: "What is the link to clone the repo?",
          name: "clone",
        },
        {
          type: "list",
          name: "license",
          message: "Please select the license you used for this project.",
          choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "IBM",
            "ISC",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
            "None"
          ],
        },
        {
          type: "input",
          message: "Please enter any testing protocols you used for your project?",
          name: "test",
        },
        {
          type: "input",
          name: "userName",
          message: "What is your GitHub username?",
        },
        {
          type: "input",
          name: "userEmail",
          message: "What is your email?",
        },
        {
          type: "input",
          name: "URL",
          message: "What is the URL of the live site?",
        },
        {
          type: "input",
          name: "repo",
          message: "What is the URL of the github repo?",
        },
      ]
 

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   //callback function
   .then((answers) => {
    console.log(answers)
    const fileName = 'markDown.md';
    const data = generateMarkdown(answers)
    fs.writeFile(fileName,data, (err) =>
     err? console.log(err) : console.log('Success!'));
   })
}


// Function call to initialize app
init();
