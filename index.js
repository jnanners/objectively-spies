const inquirer = require("inquirer");
const Generate = require("./src/generate-page");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

class Porfolio{
    constructor(){
        this.employees = [];
    }
    createTeam(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter team managers name. (Required)",
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    }
                    else{
                        console.log("Please enter team manager name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Please enter team managers employee ID. (Required)",
                validate: idInput => {
                    if(idInput){
                        return true;
                    }
                    else{
                        console.log("Please enter team managers employee ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter team managers email. (Required)",
                validate: emailInput => {
                    if(emailInput){
                        return true;
                    }
                    else{
                        console.log("Please enter team manager name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Please enter team managers office number. (Required)",
                validate: officeInput => {
                    if(officeInput){
                        return true;
                    }
                    else{
                        console.log("Please enter team manager name!");
                        return false;
                    }
                }
            }
        ])
        .then(({name, id, email, officeNumber}) => {
            this.employees.push(new Manager(name, id, email, officeNumber));
            
            this.buildTeam();
        })
    }

    buildTeam(){
        inquirer.prompt(
            {
                type: "list",
                message: "Select who to add to your team!",
                name: "action",
                choices: ["Add Engineer", "Add Intern", "Finish Team"]
            }
        )
        .then(({action}) => {
            if(action === "Add Engineer"){
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Please enter engineer name. (Required)",
                        validate: nameInput => {
                            if(nameInput){
                                return true;
                            }
                            else{
                                console.log("Please enter engineer name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Please enter engineer employee ID. (Required)",
                        validate: idInput => {
                            if(idInput){
                                return true;
                            }
                            else{
                                console.log("Please enter engineer employee ID!");
                                return false;
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Please enter engineer email. (Required)",
                        validate: emailInput => {
                            if(emailInput){
                                return true;
                            }
                            else{
                                console.log("Please enter engineer name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "Please enter engineers github. (Required)",
                        validate: githubInput => {
                            if(githubInput){
                                return true;
                            }
                            else{
                                console.log("Please enter engineers github!");
                                return false;
                            }
                        }
                    }
                ]).then(({name, id, email, github}) => {
                    this.employees.push(new Engineer(name, id, email, github));
                    
                    this.buildTeam();
                })
            }
            else if(action === "Add Intern"){
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Please enter intern name. (Required)",
                        validate: nameInput => {
                            if(nameInput){
                                return true;
                            }
                            else{
                                console.log("Please enter intern name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Please enter intern employee ID. (Required)",
                        validate: idInput => {
                            if(idInput){
                                return true;
                            }
                            else{
                                console.log("Please enter intern employee ID!");
                                return false;
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Please enter intern email. (Required)",
                        validate: emailInput => {
                            if(emailInput){
                                return true;
                            }
                            else{
                                console.log("Please enter intern name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "Please enter interns school. (Required)",
                        validate: githubInput => {
                            if(githubInput){
                                return true;
                            }
                            else{
                                console.log("Please enter interns school!");
                                return false;
                            }
                        }
                    }
                ]).then(({name, id, email, school}) => {
                    this.employees.push(new Intern(name, id, email, school));
                    
                    this.buildTeam();
                })
            }
            else{
                new Generate(this.employees).page();
            }
        })
    }
}

new Porfolio().createTeam();