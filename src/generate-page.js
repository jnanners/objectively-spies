const fs = require("fs");

class Generate{
    constructor(employees){
        this.employees = employees
    }
    page(){
        const pageHTMl = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel='stylesheet' href='./style.css'>
            <title>Team-Portfolio</title>
        </head>
        <body>
            <header>
                <h1>Project Team</1>
            </header>
            <section class='workers'>${this.employeeLoop(this.employees)}</section>
        </body>
        </html>`

        this.writeFile(pageHTMl)
        this.copyFile()
    }
    employeeLoop(employees){
        let employeeHTML = [];
        for(let i = 0; i < employees.length; i++){
            if(employees[i].getRole() === "Manager"){
                const managerHTML = `
                <div class='worker'>
                    <h2>${this.employees[i].getName()}</h2>
                    <h3>${this.employees[i].getRole()}</h3>
                    <p>ID: ${this.employees[i].getId()}</p>
                    <p>Email: <a href='mailto: ${this.employees[i].getEmail()}'>${this.employees[i].getEmail()}</a></p>
                    <p>Office Number: ${this.employees[i].officeNumber}</p>
                </div>
                `
                employeeHTML.push(managerHTML);
            }
            else if(employees[i].getRole() === "Engineer"){
                const engineerHTML = `
                <div class='worker'>
                <h2>${employees[i].getName()}</h2>
                <h3>${employees[i].getRole()}</h3>
                <p>ID: ${this.employees[i].getId()}</p>
                <p>Email: <a href='mailto: ${this.employees[i].getEmail()}'>${this.employees[i].getEmail()}</a></p>
                <p>Github: <a href='https://github.com/${this.employees[i].getGithub()}' target='_blank'>${this.employees[i].getGithub()}</a></p>
                </div>
                `
                employeeHTML.push(engineerHTML);
            }
            else if(employees[i].getRole() === "Intern"){
                const internHTML = `
                <div class='worker'>
                <h2>${employees[i].getName()}</h2>
                <h3>${employees[i].getRole()}</h3>
                <p>ID: ${this.employees[i].getId()}</p>
                <p>Email: <a href='mailto: ${this.employees[i].getEmail()}'>${this.employees[i].getEmail()}</a></p>
                <p>School: ${this.employees[i].getSchool()}</p>
                </div>
                `
                employeeHTML.push(internHTML)
            }
        }
        return employeeHTML.join("");
    }
    writeFile(fileContent){
        return new Promise((resolve, reject) => {
            fs.writeFile("./dist/roster.html", fileContent, err => {
                if(err){
                    reject(err);
                    return
                }
                resolve({
                    ok: true,
                    message: "File created!"
                })
            })
        })
    }
    copyFile(){
        return new Promise((resolve, reject) => {
            fs.copyFile("./src/style.css", "./dist/style.css", err => {
                if(err){
                    reject(err)
                    return
                }
                resolve({
                    ok: true,
                    message: "File copied!"
                })
            })
        })
    }
}

module.exports = Generate;