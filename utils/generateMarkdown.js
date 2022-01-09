// function to generate markdown for README
function generateMarkdown(data) {
	return `
  # ${data.title}
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

  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  ---
  ## Username

  https://github.com/${data.username}
  ---
  ## Contact
  
  ${data.contact}

`;
}

module.exports = generateMarkdown;
