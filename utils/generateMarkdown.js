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
  return `
  
# ${data.title}


## Table of Contents

* [Project Description](#project-description)
* [Installation Instructions](#installation-instructions)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

## Project Description <a id="project-description"></a>
${data.description}

## Installation Instructions <a id="installation-instructions"></a>
${data.installation}

## Contribution <a id="contribution-guidelines"></a>
${data.contribution}

## Test Instructions <a id="test-instructions"></a>
${data.test}

## License <a id="license"></a>
${data.license}

## Questions <a id="questions"></a>
Please reach out if you have any questions by emailing ${data.email}.

`;
}


module.exports = generateMarkdown;
