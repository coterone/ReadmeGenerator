function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [How to Use This Application](#HowtoUseThisApplication)
* [Testing](#testing)
* [Contributors](#contributors)
* [Questions](#questions)

## Installation
${data.installation}

## How to Use This Application:
${data.usage}

## Testing
${data.test}

## Contributors
${data.contributors}


## Questions
Please send your questions, https://github.com/${data.github}`
}

module.exports = generateMarkdown;