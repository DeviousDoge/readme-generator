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
const generateMarkdown = ({title, description, installation, usage, contribution, test, github, email }) =>
 `# ${title}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contribution)
  5. [Tests](#Test)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
## Description
${description} 
## Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Test
${test}
 ## License

## GitHub
${github}
## E-mail
${email}
`;

// ${licenseBadge(data)}
module.exports = generateMarkdown;
