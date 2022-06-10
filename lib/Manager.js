//special items - child of employee
//office number
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name = '', role = '', email = '') {
        super(name, email, id);
        this.office = Math.floor((1 + Math.random()) * 0x100);
        this.role = role;
        this.email = email;
        this.id = id; //does this have to be a formula? it should grab the formula from parent?
    }
    getRole () {
        return `${this.name} is a/an ${this.role}.`
    }
}
module.exports = Manager;