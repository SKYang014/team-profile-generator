//special items - child of employee
//office number
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name = '', email = '', office, id ) {
        super(name, email, id);
        this.office = office; 
    }
    getRole () {
        return 'Manager'
    }
    getOffice () {
        return this.office
    }
}
module.exports = Manager;