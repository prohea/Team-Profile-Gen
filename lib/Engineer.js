const Employee = require('./Employee'
)
class Engineer extends Employee{
    constructor(name, id, email, github){
        this.gitHub = github
    }
    getGitHub() {
        return this.gitHub
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer