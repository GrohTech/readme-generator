// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
   ${data.description}
  
  ## Badges
  
  ## Table of Contents 
  * [Installation](#installation)
  * [Instructions](#instructions)
  * [Tests](#tests)
  * [Languages](#languages)
  * [Licenses](#license)
  * [Contributing](#contributing)
  * [Credits](#credits)
  * [Questions](#questions)

  
  
  ## Installation
  ${data.installation}
  
  ## Instructions 
  ${data.instructions}
  
  ## Tests
  ${data.tests}

  ## Languages
  ${data.language}

  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}

  ## Credits
  ${data.credits}

  ## Questions
  If you have any questions please connect with me, here ${data.github} or email me here ${data.email}.
`;
}

module.exports = generateMarkdown;
