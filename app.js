// function sayHello(name) {
//     console.log('Hello ' + name)
// }
// //sayHello('Maryam');
// console.log(window);

//2nd lesson
// console.log(); //global
// setTimeout(); //global
// clearTimeout();

// setInterval();
// clearInterval();

// var message = '';
// console.log(global.message);

//3rd lesson -> Modules

// var sayHello = function () {

// };

// window.sayHello();

//console.log(module);

/** Loading a module */
// const logger = require('./logger')

// //logger = 1;

// logger('message');

//console.log(logger)

/**** PAHT module  */
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

/** OS Module */

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`)

//Template String
//ES6 /ES2015 :ECMAScript 6 