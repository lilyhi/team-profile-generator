const Employee = require('./lib/Employee');


class Engineer extends Employee {
    constructor() {
        this.name = name;
        // employee already has this.name so i dont think its necessary again
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        
    }
}


// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'




module.exports = Engineer;