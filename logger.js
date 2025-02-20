console.log(__filename, __dirname);

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an Http Request
    console.log(message);
}

module.exports = log;
//module.exports.endPoint = url;we will keep the url to be private

// module.exports.log = log
// exports.log = log

// exports = log; //wrong
