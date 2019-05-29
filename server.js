const http = require('http');
const port = process.env.PORT || 7000;
const app = require('./index');
const server = http.createServer(app);

require("dotenv").config();
server.listen(port,function(){
    console.log("Port is listening for requests");
});



// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//     });
//     response.end('Hello World\n');
//     }).listen(port);