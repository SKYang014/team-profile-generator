//calls all the different employees
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs')
const listMembers = [];



const promptEmployee = projectData => {
    // promptUser().then(answers => console.log(answers));

    const addEmployee = () =>
        [
            {
                type: 'confirm',
                name: 'confirmEmployee',
                message: 'Would you like to add another employee?',
                default: true
            },
            {
                type: 'list',
                name: 'typeEmployee',
                message: 'Would you like to add an engineer or intern?',
                choices: ['Engineer', 'Intern'],
                when: ({ confirmEmployee }) => confirmEmployee
            },
        ]

    const questionsE = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name? (Engineer Name Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter their name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter their email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their id? (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter your id!');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'github',
                message: 'What is their github username?',
            }])
            .then((dataE) => {

                const engineer = new Engineer(dataE.name, dataE.email, dataE.id, dataE.github)
                listMembers.push(engineer)
                console.log(listMembers)

                return dataE
            })
    }

    const questionsI = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name? (Intern Name Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter their name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter their email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their id? (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter your id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is their school?',
            }])
            .then((dataI) => {
                console.log(dataI)
                const intern = new Intern(dataI.name, dataI.email, dataI.id, dataI.school)
                listMembers.push(intern)
                return dataI
            })

    }

    console.log(`
    =================
    Enter Team Manager's Info
    =================
    `);
    //listMembers.employees = [];
    // const questionsM = () => {
    // return 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Manager Name Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter their id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter your office number: ',
        },
    ])
        .then((dataM) => {
            const manager = new Manager(dataM.name, dataM.email, dataM.id, dataM.office)
            listMembers.push(manager)
            console.log(listMembers)
            // inquirer
            //     .prompt(
            //         addEmployee)
            console.log('hello')
            return dataM
        })
        .then(() =>
            inquirer
                .prompt(
                    [
                        {
                            type: 'confirm',
                            name: 'confirmEmployee',
                            message: 'Would you like to add another employee?',
                            default: true
                        },
                        {
                            type: 'list',
                            name: 'typeEmployee',
                            message: 'Would you like to add an engineer or intern?',
                            choices: ['Engineer', 'Intern'],
                            when: ({ confirmEmployee }) => confirmEmployee
                        },
                    ]
                ))
        .then(projectData => {

            if (projectData.typeEmployee == 'Engineer') {
                return questionsE(projectData);
            }
            if (projectData.typeEmployee == 'Intern') {
                return questionsI(projectData);
            }
            else {
                return listMembers;
            }
        })
};
promptEmployee();
// .then(answers => console.log(answers));