// Packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const axios = require("axios");




// Array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "Please enter a title for your README"
    },
    {
    type: "input",
    name: "description",
    message: "Please enter a description"
    },
    {
    type: "input",
    name: "installation",
    message: "Please enter your project's installation requirements"
    },
    {
    type: "input",
    name: "contribution",
    message: "Please enter contribution requirements"
    },
    {
    type: "input",
    name: "test",
    message: "Enter your test instructions"
    },
    {
    type: "checkbox",
    name: "license",
    message: "Please select a license",
    choices: ["MIT", "GNU GPLv3", "Mozilla Public License 2.0", "Apache", "None"]
    },
    {
    type: "input",
    name: "username",
    message: "What is the username of your GitHub Profile?"    
    },
    {
    type: "input",
    name: "email",
    message: "Please provide your email address"  
    }
];



// TODO: Create a function to write README file
inquirer.prompt(questions).then(function(data) {
    console.log(data);
        fs.writeFile("README.md", generateMarkdown(data, githubInfo), function(err) {
          if (err) {
            throw(err);
            };
    console.log("README file was created successfully.");
           });
    });


    const githubInfo = {
        getUsername(username) {
    axios.get("https://api.github.com/users/" + username)
          .then(data => {
              console.log(data.username);
        });
    }}
    
      
      
// TODO: Create a function to initialize app
function init () {}

// Function call to initialize app
init();

    