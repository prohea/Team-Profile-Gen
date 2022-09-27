function createHTML (teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
        <link rel=stylesheet" href="./dist/style.css">
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Team</h1>
  </div>
</div>
<div class="container">
    <div class="row">
        <div class="main-section col-12 d-flex justify-content-center">
            ${createTeam(teamMembers)}
        </div>
    </div>
</div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `;
};

function createTeam(teamMembers) {
    function createManager(manager) {
        return `
        <div class="card employee-card manager-card" style="width: 18rem;">
            <div class="card-header">
             <h2 class="card-title">${manager.getName()}</h2>
             <h4 class="card-text">Role: ${manager.getRole()}</h4>
            </div>
        <div class="card-body">
            <ul class="list-group">
                <li class = "list-group-item">ID: ${manager.getID()}</li>
                <li class = "list-group-item">Email: <a href="email: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class = "list-group-item">Phone Number:  <a href="number: ${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
            </ul>
  </div>
</div>
        `;};
     function createEngineer(engineer) {
        return `
        <div class="card employee-card engineer-card" style="width: 18rem;">
        <div class="card-header">
         <h2 class="card-title">${engineer.getName()}</h2>
         <h4 class="card-text">Role: ${engineer.getRole()}</h4>
        </div>
    <div class="card-body">
        <ul class="list-group">
            <li class = "list-group-item">ID: ${engineer.getID()}</li>
            <li class = "list-group-item">Email: <a href="email: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class = "list-group-item">GitHub:  <a href="https//github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
        </ul>
</div>
</div>   
        `;};
     function createIntern(intern) {
        return `
        <div class="card employee-card intern-card" style="width: 18rem;">
        <div class="card-header">
         <h2 class="card-title">${intern.getName()}</h2>
         <h4 class="card-text">Role: ${intern.getRole()}</h4>
        </div>
    <div class="card-body">
        <ul class="list-group">
            <li class = "list-group-item">ID: ${intern.getID()}</li>
            <li class = "list-group-item">Email: <a href="email: ${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class = "list-group-item">School:  <a href="number: ${intern.getSchool()}">${intern.getSchool()}</a></li>
        </ul>
</div>
</div>
         `;};
const html = [];
html.push(teamMembers
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => createManager(manager))
);
html.push(teamMembers
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => createManager(engineer))
    .join('')
);
html.push(teamMembers
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => createManager(intern))
    .join('')
);
return html.join('')
}
module.exports = createHTML;
