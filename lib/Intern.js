const Employee = require('./lib/Employee');


class Intern extends Employee {
    constructor() {
        this.name = name;
        // employee already has this.name so i dont think its necessary again
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        
    }

}


// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'


module.exports = Intern;