const Employee =  require("./Employee0.js")
// methods/properties for name, Id, Email, role
// Here super() is called to avoid duplicating the constructor parts between Engineer and Employee
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }
    // add property/method github 
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;
