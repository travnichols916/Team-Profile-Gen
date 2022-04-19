function generateCard(newArray) {
    let cards = [];
    //role declared outside of for loop
    let role;
    for (let i = 0; i < newArray.length; i++) {
      // Use array team that we generate from input to make new array 
      const team = newArray[i];
      role = team.getRole();
      if (role === "Manager") {
        cards.push(generateManagerCard(team));
      } else if (role === "Engineer") {
        cards.push(generateEngineerCard(team));
      } else if (role === "Intern") {
        cards.push(generateInternCard(team));
      } else {
        console.log("Can't Generate Role Card");
      }
    }
    return cards.join(``);
  }

function generateManagerCard(manager) {
    return `
        <div class="card m-1 shadow" style="max-width: 18rem">
          <div class='card-header bg-primary'>
            <h3 class="card-title text-light">${(manager.name)}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Position: ${manager.role}</li>
              <li class="list-group-item">Email: <a href="mailto: ${
                manager.email
              }"> ${manager.email} </a></li>
              <li class="list-group-item">Office Number: ${
                manager.officeNumber}
                </li>
            </ul>
          </div>
        </div>
        `;
  }
  
  function generateEngineerCard(engineer) {
    return `
      <div class="card m-1 shadow" style="width: 18rem">
        <div class='card-header bg-primary'>
          <h3 class="card-title text-light">${engineer.name}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Position: ${engineer.role}</li>
            <li class="list-group-item">Email: <a href="mailto: ${
              engineer.email
            }"> ${engineer.email} </a></li>
            <li class="list-group-item">GitHub: <a href=https://github.com/${
              engineer.github}> ${engineer.github} </a></li>
          </ul>
        </div>
      </div>
      `;
  }
  
  function generateInternCard(intern) {
    return `<div class="card m-1 shadow" style="width: 16rem">
        <div class='card-header bg-primary'>
          <h3 class="card-title text-light">${intern.name}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Position: ${intern.role}</li>
            <li class="list-group-item">Email: <a href="mailto: ${
              intern.email
            }"> ${intern.email} </a></li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
        </div>
      </div>
      `;
  }
  
  // we pass our team array into this generateTeam function
  function rendered(newArray) {
    
  
    return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
              <title>My Team</title>
              <body>
              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4 text-center">My Team</h1>
                </div>
              </div>
              <div class="d-flex flex-row flex-wrap justify-content-center">
              ${generateCard(newArray)}
              </div>
              </body>
          </head>
          </html>
      `;
  }
module.exports = rendered;