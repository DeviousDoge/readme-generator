
// TODO: Include packages needed for this application

  // TODO: Create an array of questions for user input
 const questions = [
    {
      type: "input",
      message: "Please give us your project name.",
      name: "title", 
         },
    {
       type: "input",
       message: "Please describe your project in sufficient detail.",
       name: "description",
         },
    {
      type: "input",
      message: "How does one install your application?",
      name: "installation",
         },    
    {
       type: "input",
       message: "How does one use your application?",
       name: "usage",
         },    
    {
      type: "checkbox",
      message: "What License do you plan to use for this project?",
      choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0", "None"],
      name: "license",
         }, 
    {
       type: "input",
       message: "How can we help contribute?",
       name: "contribution",
         },
    {
      type: "input",
      message: "How can people test this project?",
      name: "test",
         },
    {
       type: "input",
       message: "Plug your github!",
       name: "github",
         },
    {
      type: "input",
      message: "Plug your email!",
      name: "email",
         },
 ];
 
 
  // TODO: Create a function to initialize app
 function init() {
    const inquirer = require("inquirer");
    const fs = require("fs");
    const generate = require("./utils/generateMarkdown.js");
    // const path = require("path");

    // function writeToFile(fileName, data) {
    //     fs.writeFileSync(path.join (process.cwd(), "Readme.md"), generate());
    //  }

    inquirer
        .prompt(questions)
        .then(function(answers) {
          const createMarkdown = generate(answers)
          fs.writeFile('readme.md', createMarkdown, (err) =>
          err ? console.log(err) : console.log('Successfully created readme!')
          );

          // return writeToFile(answers);
        });
 }

  // Function call to initialize app
init();
