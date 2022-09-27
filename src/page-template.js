function createHTML (teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="">
        <link rel=stylesheet" href="./dist/style.css">
    </head>
    <body>
    </body>
    </html>
    `;
};

function createTeam(teamMembers) {
    function createManager(manager) {
        return `
        
        `;};
     function createEngineer(engineer) {
        return `
                
        `;};
     function createIntern(intern) {
        return `
                
         `;};
const html = [];
html.push(teamMembers
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => createManager(manager))
);
html.push(teamMembers
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => createManager(engineer))
    .join("")
);
html.push(teamMembers
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => createManager(intern))
    .join("")
);
return html.join("")
}
module.exports = createHTML;
