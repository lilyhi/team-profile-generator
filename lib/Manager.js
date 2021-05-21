const Employee = require('./lib/Employee');


class Manager extends Employee{
    constructor() {
        this.name = name;
        // employee already has this.name so i dont think its necessary again
        this.officeNumber = officeNumber;
    }


    getRole() {

    }
}


// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'




module.exports = Manager;