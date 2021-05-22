// include necessary packages
const inquirer = require("inquirer");
const fs = require("fs");

// import classes
// const Employee = require('./lib/Employee');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const {htmlTemplate, endOfHTML} = require("./src/templateCode");
// if the object descunstruction doesnt work just give it a variable name

let allTeamMembers = []; 

// inquirer - Create questions for user input
function mangQuestions() {
inquirer
    .prompt([
    {
        type: "input",
        name: "mangName",
        message: "What is the team managers name? (Required)",
        validate: (mangName) => {
        if (mangName) {
            return true;
        } else {
            console.log("Please enter the team managers name!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "mangID",
        message: "What is your employee ID? (Required)",
        validate: (mangID) => {
        if (mangID) {
            return true;
        } else {
            console.log("Please enter your employee ID!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "mangEmail",
        message: "Enter your email address. (Required)",
        validate: (mangEmail) => {
        if (mangEmail) {
            return true;
        } else {
            console.log("Please enter your email address!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "mangPhone",
        message: "What is your office number? (Required)",
        validate: (mangPhone) => {
        if (mangPhone) {
            return true;
        } else {
            console.log("Please enter your office number!");
            return false;
        }
        },
    },
    ])
    .then((mangAnswers) => {
        console.log("prompt answer", mangAnswers);
        const mgrInfo = new Manager(mangAnswers.mangName, mangAnswers.mangID, mangAnswers.mangEmail, mangAnswers.mangPhone);
        console.log("Class OBJ", mgrInfo);
        allTeamMembers.push(mgrInfo);
        addEmployee();
    });
} //END OF MGR FUNCTION

function addEmployee() {
inquirer
    .prompt({
    type: "list",
    name: "addEmployee",
    message:
        "Select an employee to add to the team or finish the team profile.",
    choices: ["Engineer", "Intern", "Finish team profile"],
    validate: (addEmployee) => {
        if (addEmployee) {
        return true;
        } else {
        console.log("Please select an employee or select Finish!");
        return false;
        }
    },
    })
    .then((response) => {
    console.log(response);

      // chose engineer
    if (response.addEmployee === "Engineer") {
        engQuestions();
    } else if (response.addEmployee === "Intern") {
        internQuestions();
    } else {
        //GENERTAE HTML FILE FUNCTION IS CALLED
        console.log(allTeamMembers);
    }
    });
}

function engQuestions() {
inquirer
    .prompt([
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineers name? (Required)",
        validate: (engineerName) => {
        if (engineerName) {
            return true;
        } else {
            console.log("Please enter the engineers name!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "enginID",
        message: "What is your employee ID? (Required)",
        validate: (enginID) => {
        if (enginID) {
            return true;
        } else {
            console.log("Please enter your employee ID!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "enginEmail",
        message: "Enter your email address. (Required)",
        validate: (enginEmail) => {
        if (enginEmail) {
            return true;
        } else {
            console.log("Please enter your email address!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "username",
        message: "Enter your Github username. (Required)",
        validate: (usernameInput) => {
        if (usernameInput) {
            return true;
        } else {
            console.log("Please enter your Github username!");
            return false;
        }
        },
    },
    ])
    .then((engAnswers) => {
        console.log(engAnswers);
        addEmployee();
    });
} //END OF ENGINEER FUNCTION

function internQuestions() {
inquirer
    .prompt([
    {
        type: "input",
        name: "internName",
        message: "What is the interns name? (Required)",
        validate: (internName) => {
        if (internName) {
            return true;
        } else {
            console.log("Please enter the interns name!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "internID",
        message: "What is your employee ID? (Required)",
        validate: (internID) => {
        if (internID) {
            return true;
        } else {
            console.log("Please enter your employee ID!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter your email address. (Required)",
        validate: (internEmail) => {
        if (internEmail) {
            return true;
        } else {
            console.log("Please enter your email address!");
            return false;
        }
        },
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter your schools name. (Required)",
        validate: (internSchool) => {
        if (internSchool) {
            return true;
        } else {
            console.log("Please enter your schools name!");
            return false;
        }
        },
    },
    ])
    .then((internAnswer) => {
    console.log(internAnswer);
      //ADD EMPLOYEE AGAIN
    addEmployee();
    });
} // END OF INTERN FUNCTION


function generateEmployeeHtml(){
    let html = ""
    for (let i = 0; i < allTeamMembers; i++) {
        // generate the html for each iteration of the loop once the string has been created append it to the html string on line 238
    }
    // html variable to the template code 
    
}



// Create a function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
    if( error) {console.log(error); }

    console.log("Team Profile success!");
    })
}


// Create a function to initialize app
function init() {
    console.log("Welcome to Team Profile Generator!");
    mangQuestions();
    const data = generateEmployeeHtml();
    writeToFile("index.html", data);
  // writeToFile("ReadMe.md", answers)
  // writeToFile("ReadMe.md", generateMarkdown({...answers}))
}

// Function call to initialize app
init();
