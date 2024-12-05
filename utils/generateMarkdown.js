// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    let lincenseBadge ='';
    const licenseLink = renderLicenseLink(license);

    if (license) {

  switch (license) {
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
        return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
    case 'BSD 3-Clause':
        return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'MPL 2.0':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
    default:
        return '';  // Returns an empty string if no valid license is provided
}
return lincenseBadge;

 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    let licenseLink ='';

    if (license) {

       switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'Apache 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
        case 'GPL 3.0':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'BSD 3-Clause':
            return 'https://opensource.org/licenses/BSD-3-Clause';
        case 'MPL 2.0':
            return 'https://opensource.org/licenses/MPL-2.0';
        default:
            return '';  // Returns an empty string if no valid license is provided
  }
 }
 return licenseLink;
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // If no license is provided, return an empty string
  if (!license) {
    return '';
}

// Prepare license badge and link
let badge = '';
let licenseLink = '';

switch (license) {
    case 'MIT':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        licenseLink = 'https://opensource.org/licenses/MIT';
        break;
    case 'Apache 2.0':
        badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        break;
    case 'GPL 3.0':
        badge = '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
    case 'BSD 3-Clause':
        badge = '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
        break;
    case 'MPL 2.0':
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        licenseLink = 'https://opensource.org/licenses/MPL-2.0';
        break;
    default:
        return ''; // If the license is not recognized, return an empty string
}

// Return the formatted license section
return `
## License

This project is licensed under the ${license} License.  
${badge}  
For more details, see the full [license]( ${licenseLink}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions, please contact me at ${data.email}.
  GitHub: [${data.github}](https://github.com/${data.github})
  `;
}

export default generateMarkdown;
