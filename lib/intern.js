const employee = require("./employee.js")
// methods/properties for name, Id, Email, role. 
//super() is called to avoid duplicating the constructor parts between intern and employee
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "intern";
    }
    // extend property for school
    getSchool(){
        return this.school
    }
}
module.exports = intern;
