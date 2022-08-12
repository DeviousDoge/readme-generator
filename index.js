const { title } = require("process");

//questions to use in the inquire prompt
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
       message: "How does one use your application? If you wish to include screenshots here, remember the syntax for images is ![Title](/path/image.png)",
       name: "usage",
         },    
    {
      type: "list",
      message: "What License do you plan to use for this project?",
      choices: ["Apache", "IBM", "MIT", "Mozilla", "Open Data Commons", "PERL", "None"],
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
  //function that runs after node index.js
 function init() {
    //packets
    const inquirer = require("inquirer");
    const fs = require("fs");
    //taking generateMarkdown results from the other page
    const generate = require("./utils/generateMarkdown.js");
    //inquirer being called
    inquirer
        //prompt user to answer questions based on the array
        .prompt(questions)
        //then run a series of functions
        .then(function(answers) {
          //call generateMarkdown and use parameters from the prompt response
          const createMarkdown = generate(answers)
          //make a file named readme.md  with its contents containing the contents defined in generate markdown and the responses the user chose in the prompt.
          fs.writeFile('readme.md', createMarkdown, (err) =>
          //console log to let the user know it worked.
          err ? console.log(err) : console.log('Successfully created readme! Save this readme somewhere else so it doesnt get lost.')
          );
        });
 }
  // Function call to initialize app
init();
