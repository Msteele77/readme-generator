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
function generateMarkdown(answers) {
  return `
  
# ${answers.title}


![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />



## Table of Contents

* [Project Description](#project-description)
* [Installation Instructions](#installation-instructions)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

## Project Description <a id="project-description"></a>
${answers.description}

## Installation Instructions <a id="installation-instructions"></a>
${answers.installation}

## Contribution <a id="contribution-guidelines"></a>
${answers.contribution}

## Test Instructions <a id="test-instructions"></a>
${answers.test}

## License <a id="license"></a>
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
This application is covered by ${answers.license}.

## Questions <a id="questions"></a>
Please reach out if you have any questions by emailing ${answers.email}. 
<br /><br />
Github Account: [${answers.username}](https://github.com/${answers.username})<br />
`;
}


module.exports = generateMarkdown;
