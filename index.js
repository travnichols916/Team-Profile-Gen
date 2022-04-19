const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee0.js");
const Engineer = require("./lib/Engineer0");
const Intern = require("./lib/Intern0");
const Manager = require("./lib/Manager0");
const rendered = require("./dist/rendered.js");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArr = [];
let teamstr = '';
// Async functionto run main function
//The try statement allows you to define a block of code to be tested for errors while it is being executed.
async function main() {
    try {
         await prompt()
         // for x loop
         for (let x = 0; x < teamArr.length; x++) {
              teamstr = teamstr + rendered.generateCard(teamArr[x]);
         }
         let finalizedHTML = rendered.generateHTML(teamstr)
         console.log(teamstr)
         //write file to dist folder
         writeFileAsync("./dist/index.html", finalizedHTML)
    } catch (err) {
         return console.log(err);
    }

};
async function prompt() {
    let respDone = "";
    // prompt to collect input and use do while atleast one and do it number of times depending on the while condition
    do {
         try {
              resp = await inquirer.prompt([

                   {
                        type: "input",
                        name: "name",
                        message: "What is the Employee's name?: "
                   },
                   {
                        type: "input",
                        name: "id",
                        message: "Input the Employee's ID: "
                   },
                   {
                        type: "input",
                        name: "email",
                        message: "Input the Employee's email address: "
                   },
                   {
                        type: "list",
                        name: "title",
                        message: "What is the Employee's title:",
                        choices: [
                             "engineer",
                             "Intern",
                             "Manager"
                        ]
                   }
              ]);
              let resp2 = ""
              // if else statement and use inquire prompt to input engineers username
              if (resp.title === "engineer") {
                   resp2 = await inquirer.prompt([{
                        type: "input",
                        name: "i",
                        message: "What is the Employee's github username?:",
                   }, ]);
                   //store info and push
                   const engineer = new Engineer(resp.name, resp.id, resp.email, resp2.i);
                   teamArr.push(engineer);
              } else if (resp.title === "Intern") {
                   resp2 = await inquirer.prompt([{
                        type: "input",
                        name: "i",
                        message: "What school is the Intern attending?:",
                   }, ]);
                   //store info and push
                   const intern = new Intern(resp.name, resp.id, resp.email, resp2.i);
                   teamArr.push(intern);
              } else if (resp.title === "Manager") {
                   resp2 = await inquirer.prompt([{
                        
                        type: "input",
                        name: "i",
                        message: "What is the manager's office number?:",
                   }, ]);
                   //store the object and push
                   const manager = new Manager(resp.name, resp.id, resp.email, resp2.i);
                   teamArr.push(manager);
              }
         } catch (err) {
              return console.log(err);
         }
         console.log(teamArr)
         //Prompt to continue

         respDone = await inquirer.prompt([{
              type: "list",
              name: "finish",
              message: "Do you want to continue?: ",
              choices: [
                   "Yes",
                   "No"
              ]
         }, ]);
    } while (respDone.finish === "Yes");
}



//call function to run app
main();