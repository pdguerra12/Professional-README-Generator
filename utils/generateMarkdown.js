// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
	if (license == "no") {
		return "";
	} else if (license)
		return `[![License: ${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=green)](https://opensource.org/licenses/${license})\n\n`;
}

// function to generate markdown for README
function generateMarkdown(data) {
	return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}  
  ---
  ## Description
  ${data.description}
  ---
  ## Table of Contents
  
  [Installation](#Installation)
  
  [Usage](#Usage)
  
  [Contributing](#Contributing)
  
  [Tests](#Tests)

  [License](#License)
  
  [Username](#Username)
  
  [Contact-Information](#Contact-Information)
  ---
  ## Installation
  ${data.installation}
  ---
  ## Usage
  ${data.usage}
  ---
  ## Contributing
  ${data.contributing}
  ---
  ## Tests
  ${data.tests}
  ---
  ## License
  [![License](https://img.shields.io/badge/License-${
		data.license
	}-blue.svg)](https://opensource.org/licenses/${data.license})
  ---
  ## Username
  https://github.com/${data.username}
  ---
  ## Contact
  ${data.contact}

`;
}

module.exports = generateMarkdown;
