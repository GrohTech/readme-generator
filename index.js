// App packages 
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
// const { rejects } = require('assert');
// const { resolve } = require('path');

// User questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the title of your project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
        }
    },
        {
        type: 'input',
        name: 'installation',
        message: 'What do your users need to install use this app? (Required)',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Your users would appreciate installation instructions!');
              return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What instructions do your users need to use this app? (Required)',
        validate: instructionsInput => {
            if (instructionsInput) {
              return true;
            } else {
              console.log('Your users would appreciate instructions!');
              return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include app testing information, here:',
        default: false
    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'What languages did you use to build your project? (Check all that apply)',
        choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'other']
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please include any licenses associated with your application:',
        choices: ['Apache License 2.0', 'BSC License', 'MIT License', 'GPL License', 'Mozilla Public License 2.0', 'other']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the requirements for contributing to your project? (Required)',
        validate: contributingInput => {
            if (contributingInput) {
              return true;
            } else {
              console.log('If there are no requirements to contribute, type "none". If there are contributions allowed, type "no contributions allowed".');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to your project? (Required)',
        validate: creditsInput => {
            if (creditsInput) {
              return true;
            } else {
              console.log('Please give some credit to the contributors!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your personal Github link? (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Give users a way to look at your other work!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Give users a way to contact you!');
              return false;
            }
        }
    },
  ]

//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });



// // TODO: Create a function to write README file

// function writeFile = fileContent => {
    
//     fs.writeFile('./dist/readme.md'), fileContent, err => {
//         if (err) {
//             rejects(err);
//             return;
//         }
//         resolve({
//             ok: true,
//             message: 'Abrakadabra README.md!'
//         });
//     }
// };

// Initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
  console.log(answers);
    })
}
init();
