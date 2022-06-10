//special items - child of employee
//office number
const uuid = require('../helpers/uuid');

class Manager {
    constructor(name = '') {
        this.name = name;
        this.id = 10;
        console.log(this.id)
    }
}
module.exports = Manager;