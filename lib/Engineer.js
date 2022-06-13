//special items - child of employee

const Employee = require("./Employee");

//github
class Engineer extends Employee {
    constructor(name = '', email = '', id, github = '',) {
        super(name, email, id);
        this.github = github;

    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer;