// include necessary packages
const inquirer = require('inquirer');
const fs = require('fs');

// import modules
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// create HTML template for page, add styling
let htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/a8c6a3430b.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profiles</title>
</head>
<body>
    // need to add boostrap styling
    <header class="jumbotron">
        <h1 class="text-center">
        My Team
        </h1>
    </header>

    // <main> add style to page here will cards go here? 
    </main>
</body>
</html>`

// inquirer - Create questions for user input
function questions() { 
    inquirer
        .prompt({
            type: 'input',
            name: 'mangName',
            message: 'What is the team managers name? (Required)',
            validate: mangName => {
                if (mangName) {
                    return true;
                }   else {
                    console.log('Please enter the team managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
                name: 'mangID',
                message: 'What is your employee ID? (Required)',
                validate: mangID => {
                    if (mangID) {
                        return true;
                    }   else {
                        console.log('Please enter your employee ID!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
                name: 'mangEmail',
                message: 'Enter your email address. (Required)',
                validate: mangEmail => {
                    if (mangEmail) {
                        return true;
                    }   else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
                name: 'mangPhone',
                message: 'What is your office number? (Required)',
                validate: mangPhone => {
                    if (mangPhone) {
                        return true;
                    }   else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                }
        },
        {
            type: 'list',
                name: 'addEmployee',
                message: 'Select an employee to add to the team or finish the team profile.',
                choices: ['Enigneer', 'Intern', 'Finish team profile'],
                validate: addEmployee => {
                    if (addEmployee) {
                        return true;
                    }   else {
                        console.log('Please select an employee or select Finish!');
                        return false;
                    }
                }
                // chose engineer
                if (addEmployee === engineerRole) {
                    inquirer
                        .prompt({
                            type: 'input',
                            name: 'engineerName',
                            message: 'What is the engineers name? (Required)',
                            validate: engineerName => {
                                if (engineerName) {
                                    return true;
                                }   else {
                                    console.log('Please enter the engineers name!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                                name: 'enginID',
                                message: 'What is your employee ID? (Required)',
                                validate: enginID => {
                                    if (enginID) {
                                        return true;
                                    }   else {
                                        console.log('Please enter your employee ID!');
                                        return false;
                                    }
                                }
                        },
                        {
                            type: 'input',
                                name: 'enginEmail',
                                message: 'Enter your email address. (Required)',
                                validate: enginEmail => {
                                    if (enginEmail) {
                                        return true;
                                    }   else {
                                        console.log('Please enter your email address!');
                                        return false;
                                    }
                                }
                        },
                        {
                            type: 'input',
                            name: 'username',
                            message: 'Enter your Github username. (Required)',
                            validate: usernameInput => {
                                if (usernameInput) {
                                    return true;
                                }   else {
                                    console.log('Please enter your Github username!');
                                    return false;
                                }
                            }
                        },               
                        // when done, take back to add more employees or finish
    // intern - 
    // }   else if? {
    //     pull up intern 
    // }


    inquirer
        .prompt({
            type: 'input',
            name: 'internName',
            message: 'What is the interns name? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                }   else {
                    console.log('Please enter the interns name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
                name: 'internID',
                message: 'What is your employee ID? (Required)',
                validate: internID => {
                    if (internID) {
                        return true;
                    }   else {
                        console.log('Please enter your employee ID!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
                name: 'internEmail',
                message: 'Enter your email address. (Required)',
                validate: internEmail => {
                    if (internEmail) {
                        return true;
                    }   else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
                name: 'internSchool',
                message: 'Enter your schools name. (Required)',
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    }   else {
                        console.log('Please enter your schools name!');
                        return false;
                    }
                }
        },
        // when done, take back to add more employees or finish

    // }   else {
    //     function to finish and generate HTML profile
    // }
         
                } 
            }     

}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(error){
//     if( error) {console.log(error); }
    
//     console.log("readme generated success");
//     })
// }
// we are creating a file but is it the same type of file? 



// Create a function to initialize app
function init() {
    console.log("Welcome to Team Profile Generator!");
    inquirer.prompt(questions)
    .then(answers => {
        console.log("user answers", answers);
        // writeToFile("ReadMe.md", answers)
        // writeToFile("ReadMe.md", generateMarkdown({...answers}))
        
    })
}

// Function call to initialize app
init();