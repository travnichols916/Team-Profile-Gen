const Employee = require("./Employee.js")
// methods/properties for name, Id, Email, role
//Here super() is called to avoid duplicating the constructor parts between Employee and Manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager"
        this.officeNumber = officeNumber;
    }
// add property office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager