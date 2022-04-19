const Employee = require("./Employee0.js")
// methods/properties for name, Id, Email, role. 
//super() is called to avoid duplicating the constructor parts between Intern and employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    // extend property for school
    getSchool(){
        return this.school
    }
}
module.exports = Intern;
