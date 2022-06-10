// //constructs which are shared
// //name, ID, email
// const uuid = require('./helpers/uuid');
// const express = require('express');


// class Employee {
//     constructor(name = '') {
//         this.name = name;
//         this.uuid = uuid();
//         this.email = '';//unsure hwo this will play out
//         }
    
//     isAlive  () {
//         if (this.health === 0) {
//             return false;
//             }
//             return true;
//     }
    
//     getHealth  () {
//         return `${this.name}'s health is now ${this.health}!`;
//     }
    
//     getAttackValue  () {
//         const min = this.strength - 5;
//         const max = this.strength + 5;
//         return Math.floor(Math.random() * (max - min) + min);
//     }
    
//     reduceHealth  (health) {
//         this.health -= health;
    
//         if (this.health < 0) {
//             this.health = 0;
//         }
//     }
//     }
    
//     module.exports = Employee;