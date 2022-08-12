//define content depending on the license selection
function renderLicenseLink(license) {
  console.log(license)
 if (license === 'Apache') {
  return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
if (license === 'IBM') {
  return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
}
if (license === 'MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
if (license === 'Mozilla') {
  return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}
if (license === 'Open Data Commons') {
  return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
}
if (license === 'PERL') {
  return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
}
if (license === 'None') {
  return `This Project is Unlicensed.`
}
}


//these parameters ultimately share the names of each prompt in index.js, the answers parameter in the 'then' response corresponds the two.
const generateMarkdown = ({title, description, installation, usage, contribution, test, license, github, email }) =>
 `# ${title} ${renderLicenseLink(license)}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contribution)
  5. [Tests](#test)
  6. [License](#license)
  7. [GitHub](#github)
  8. [E-mail](#e-mail)
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
${renderLicenseLink(license)} ${license}
## GitHub
${github}
## E-mail
${email}
`;
//send off the function itself when this script is referenced. 
module.exports = generateMarkdown;
