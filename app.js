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

// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory}`)

//Template String
//ES6 /ES2015 :ECMAScript 6

/** FS Module */
// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function (err, files) {
//     if (err) console.log("Error", err);
//     else console.log('Result', files);
// });

/** Event Module */

const EventEmitter = require("events");
//const emitter = new EventEmitter();

//Raise an event
//emitter.emit('messageLogged', { id: 1, url: 'http://' });

const Logger = require("./logger");
const logger = new Logger();

//Register a Listener
logger.on("messageLogged", (arg) => {
  //e, eventArg
  console.log("Listener called", arg);
});

logger.log("message");

//Raise Logging (data: message)

// emit means Making a noise , product - signaling

/** Event Arguments */
