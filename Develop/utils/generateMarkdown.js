const fs = require('fs');

function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license ==="Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if(license =='Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license =='Boost'){
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
  else if(license == 'GNU AGPLv3'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    }
    else if(license == 'GNU GPLv3'){
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
      }
      else if(license == 'IBM'){
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        }
        else if(license == 'ISC'){
          return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
          }
          if (license === "None"){
            return ""
          }  
  else{
    return ""
  }
}

function generateMarkdown(data) {
  console.log(data)

  return   `# ${data.title}
${renderLicenseBadge(data.license)}  

  ## Description:
  ${data.description}

  ## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

  ## Installation:
  ${data.installation}

  # Usage:
  ${data.usage}

  # credits
  ${data.credits}

  # License
  ${data.license}

  ---
  
  ---
  [A deployed version can be viewed here.](${data.URL})
  
    To clone the repo:
    
        git clone ${data.repo}

  ---
  
  ## Tests:
    ${data.test}
  
  ---
  
  ## Contact Information:
  * GitHub Username: ${data.userName}
  * GitHub Email: ${data.userEmail}
    
  `;
}


module.exports = generateMarkdown,renderLicenseBadge

