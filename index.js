// include necessary packages
const inquirer = require("inquirer");
const fs = require("fs");
const stylesheet = require("./dist/style")

// import classes
// const Employee = require('./lib/Employee');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const { htmlTemplate, endOfHTML } = require("./src/templateCode");
// if the object descunstruction doesnt work just give it a variable name


let htmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a8c6a3430b.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" />
    <style>${stylesheet}</style>
    <title>Team Profiles</title>
</head>
<body>
    <header class="jumbotron text-center">
        <h1>Team Profiles <i class="fa fa-address-card-o" aria-hidden="true"></i></h1>
    </header>
    <main class="container d-flex justify-content-evenly">`

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
      const mgrInfo = new Manager(
        mangAnswers.mangName,
        mangAnswers.mangID,
        mangAnswers.mangEmail,
        mangAnswers.mangPhone
      );
    //   console.log("Class OBJ", mgrInfo);
      generateHTML(mgrInfo)
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
    //   console.log(response);

      // chose engineer
      if (response.addEmployee === "Engineer") {
        engQuestions();
      } else if (response.addEmployee === "Intern") {
        internQuestions();
      } else {
        //GENERTAE HTML FILE FUNCTION IS CALLED
        writeHTML();
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
        console.log("prompt answer", engAnswers);
        const enginInfo = new Engineer(
            engAnswers.engineerName,
            engAnswers.enginID,
            engAnswers.enginEmail,
            engAnswers.username
        );
        console.log("Class OBJ", enginInfo);
        generateHTML(enginInfo)
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
    .then((internAnswers) => {
        console.log("prompt answer", internAnswers);
        const internInfo = new Intern(
            internAnswers.internName,
            internAnswers.internID,
            internAnswers.internEmail,
            internAnswers.internSchool
        );
        // console.log("Class OBJ", internInfo);
        generateHTML(internInfo)
        addEmployee();
      });
       //   //ADD EMPLOYEE AGAIN

} // END OF INTERN FUNCTION

function generateHTML(Employee) {
    console.log(Employee);
    htmlStart += `<div class="card" style="width: 20rem;">
    <div class="card-body">
        <h3 class="card-title employee">${Employee.getName()}</h3>
        <h4 class="card-subtitle">${Employee.getRole()}</h4></br>
        <p class="info">Email: <a href="mailto:${Employee.getEmail()}" class="card-link"> ${Employee.getEmail()}</a></br>
        <h4 class="card-subtitle info">ID: ${Employee.getId()}</h6>`
    if (Employee.getRole() === 'Manager') {
        htmlStart += `<h4 class="info">Office Number: ${Employee.getOfficeNumber()}</h4></br>`
    }
    else if (Employee.getRole() === 'Engineer') {
        htmlStart += `<p class="info">Github: <a href="https://github.com/${Employee.getGithub()}" class="card-link"> ${Employee.getGithub()}</a></br>`
    }
    else if (Employee.getRole() === 'Intern') {
        htmlStart += `<p class="info">School: ${Employee.getSchool()}</p></br>`

    }
    htmlStart += `
        </div >
        </div >`
}


function writeHTML(){
    htmlStart += `  </main>
    </body>
    
    </html>`
    console.log("Team Profile success!");
    fs.writeFileSync('./dist/index.html', htmlStart, function( err) {
        if (err) throw err;
        console.log("Error!")
    })
}


// // Function call to initialize app
mangQuestions();