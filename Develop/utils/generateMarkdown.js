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
  
# **${data.title}**


# Table of Contents

* [Project Description] (#description)
* [Installation Instructions] (#installation)
* [Usage] (#usage)
* [Contribution Guidelines] (#contribution)
* [Test Instructions] (#test)
* [License] (#license)
* [Questions] (#questions)

# Project Description
${data.description}

# Installation Instructions
${data.installation}

# Usage
${data.usage}

# Contribution Guidelines
${data.contribution}

# Test Instructions
${data.test}

# License
${data.license}

# Questions
Please reach out if you have any questions by emailing 



`;
}


module.exports = generateMarkdown;
