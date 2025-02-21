const EventEmitter = require("events");

var url = "http://mylogger.io/log";
class Logger extends EventEmitter {
  log(message) {
    // Send an Http Request
    console.log(message);

    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
//module.exports.endPoint = url;we will keep the url to be private

// module.exports.log = log
// exports.log = log

// exports = log; //wrong
