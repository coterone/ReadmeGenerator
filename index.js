const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "enter the title of your project",
  },
  {
    type: "input",
    name: "description",
    message: `Provide a short description explaining the what, why, and how of your project. guide questions below:

    - What was your motivation?
    - Why did you build this project?
    - What problem does it solve?
    
    `,
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples of use. Include screenshots as needed:",
  },
  {
    type: "input",
    name: "test",
    message: "How can users run tests for your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Provide your GitHub username.",
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Enter contribution details',
  },

];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    console.log('✔️  Successfully wrote to README.md');
  });
}
init();