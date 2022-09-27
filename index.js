const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const jest = require('jest');

//Locate
const template = require('./src/page-template');
const DIST_DIR = path.resolve(__dirname, 'dist');
const output = path.join(DIST_DIR, 'index.html');

//Constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Team Members
const teamMembers = [];

//Main Function
function getMembers() {
    //Manager
    function getManager() {
        console.log('Let us build a team');
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the manager name?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a name';
                } 
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the manager id?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a id';
                } 
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the manager email?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter an email';
                } 
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the manager office number?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a office number';
                } 
            },
        ])

        .then(answers => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber
            );
            teamMembers.push(manager);
            addMember();
        });
function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Would you like to add another team member?',
            choices: [
                'Engineer',
                'Intern',
                'Finished adding members'
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case 'Engineer':
                getEngineer();
                break;
            case 'Intern':
                getIntern();
                break;
            case 'default':
                generateHTML();
        }
    });
}
function getEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer name?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a name';
                } 
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the engineer id?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a id';
                } 
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineer email?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter an email';
                } 
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineer GitHub username?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a GitHub username';
                } 
            },
        ])
        .then(answers => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            teamMembers.push(engineer);
            addMember();
        });

}

function getIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern name?',
            validate: answer => {
                if(answer !== '') {
                    return true;
                }
                return 'Please enter a name';
            } 
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern id?',
            validate: answer => {
                if(answer !== '') {
                    return true;
                }
                return 'Please enter a id';
            } 
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern email?',
            validate: answer => {
                if(answer !== '') {
                    return true;
                }
                return 'Please enter an email';
            } 
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern school?',
            validate: answer => {
                if(answer !== '') {
                    return true;
                }
                return 'Please enter a school';
            } 
        },
    ])
    .then(answers => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        );
        teamMembers.push(intern);
        addMember();
    });

}
    
}
    }
