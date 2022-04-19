const employee =  require("./employee.js")
// methods/properties for name, Id, Email, role
// Here super() is called to avoid duplicating the constructor parts between engineer and employee
class engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "engineer";
        this.github = github;
    }
    // add property/method github 
    getGithub(){
        return this.github;
    }
}
module.exports = engineer;
