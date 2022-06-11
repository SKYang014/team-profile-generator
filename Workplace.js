//calls all the different employees
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs')
const listMembers = []
//keep track of answers in a list, push info into array
const managerQuestions = () => {
    const questionsM = [{
        type: 'text',
        name: 'name',
        message: "What is the Manager's name?"
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is their id number?'
    },
{
        type: 'text',
        name: 'office',
        message: 'What is their office number?'
    },]


    inquirer
    .prompt(
        questionsM)
    
    .then((dataM) => {
        console.log(dataM)
        const manager = new Manager(dataM.name, dataM.email, dataM.id, dataM.office)
        listMembers.push(manager)
    })

}
managerQuestions()