// Pair license input with a badge
function renderLicenseBadge(license) {
  if(!license){
    return ""
  }
  return `<img src= "https://shields.io/badge/license-${license}-blue" alt="license badge"/>`
};

// Take user from license badge to license section of README
function renderLicenseLink(license) {
  if(!license){
    return ""
  }
    return `\n* [License](#license)\n`
};

// Display license name or an empty string
function renderLicenseSection(license) {
  if(!license){
    return ""
  }
    return license
};

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
   ${data.description}
  
  ## Badges
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
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
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}

  ## Credits
  ${data.credits}

  ## Questions
  If you have any questions please connect with me through [GitHub](${data.github}) or  [legroh@uwm.edu](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
