// App packages 
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What instructions do your users need to install this app? (Required)',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Your users would appreciate instructions!');
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
        name: 'contributors',
        message: 'Who contributed to your project? (Required)',
        validate: contributorsInput => {
            if (contributorsInput) {
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
    {
        type: 'input',
        name: 'testing',
        message: 'Include testing information, here:',
        default: false
    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'What languages did you use to build your project? (Check all that apply)',
        choices: ('HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'other'),
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What licenses does your program have? (Check all that apply)',
        choices: ['Apache License 2.0', 'BSC License', 'MIT License', 'GPL License', 'Mozilla Public License 2.0', 'other', 'no license']
    },
  ]
  .then((answers) => {
console.log(answers);
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
