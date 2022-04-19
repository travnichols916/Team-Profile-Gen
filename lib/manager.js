const employee = require("./employee.js")
// methods/properties for name, Id, Email, role
//Here super() is called to avoid duplicating the constructor parts between employee and manager
class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "manager"
        this.officeNumber = officeNumber;
    }
// add property office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = manager