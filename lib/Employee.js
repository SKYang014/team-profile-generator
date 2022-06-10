class Employee {
    constructor(name = '', email = '') {
        this.name = name;
        this.email = email;
        this.id = Math.floor((1 + Math.random()) * 0x100);

    }
}
module.exports = Employee;