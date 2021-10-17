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
            <title>Team-Portfolio</title>
        </head>
        <body>
            <section class='manager'>
                <h2>${this.employees[0].getName()}</h2>
                <h3>${this.employees[0].getRole()}</h3>
                <p>
                    ID: ${this.employees[0].getId()}
                    Email: ${this.employees[0].getEmail()}
                    Office Number: ${this.employees[0].officeNumber}
                </p>
            </section>
            <section class='workers'>${this.employeeLoop(this.employees)}</section>
        </body>
        </html>`

        this.writeFile(pageHTMl)
        this.copyFile()
    }
    employeeLoop(employees){
        let employeeHTML = [];
        for(let i = 1; i < employees.length; i++){
            if(employees[i].getRole() === "Engineer"){
                const engineerHTML = `<div>
                <h2>${employees[i].getName()}</h2>
                <h3>${employees[i].getRole()}</h3>
                <p>
                    ID: ${this.employees[i].getId()}
                    Email: ${this.employees[i].getEmail()}
                    Github: ${this.employees[i].getGithub()}
                </p>
                </div>
                `
                employeeHTML.push(engineerHTML);
            }
            else if(employees[i].getRole() === "Intern"){
                const internHTML = `<div>
                <h2>${employees[i].getName()}</h2>
                <h3>${employees[i].getRole()}</h3>
                <p>
                    ID: ${this.employees[i].getId()}
                    Email: ${this.employees[i].getEmail()}
                    School: ${this.employees[i].getSchool()}
                </p>
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