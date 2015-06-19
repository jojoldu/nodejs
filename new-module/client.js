	
var Socket = require('net').Socket; 
 
var bLogName = false
   , bLogComment = true;
 
var localhost = '127.0.0.1'
   , localport = '3030';
 
var socket = new Socket();
 
socket
    .on('data', function (data) {
        if (bLogName){
           console.log('Event: "data"'); 
        } 
        console.log('Recv[' + data.length + ']: ' + data.toString());
    })
    .on('drain', function () {
        if (bLogName){
            console.log('Event: "drain"');
        }
        if (bLogComment){
            console.log('The write buffer is empty.');
        }
    })
    .on('error', function (exception) {
        if (bLogName) console.log('Event: "error"');
        console.error(exception);
    })
    .on('end', function () {
        if (bLogName) console.log('Event: "end"');
        if (bLogComment) console.log('The other end of the socket sends a FIN packet.');
    })
    .on('close', function (had_error) {
        if (bLogName) console.log('Event: "close"');
        if (had_error) {
            console.error('The socket had a transmission error.');
        }
    })
    .connect(localport, localhost, function () {
    console.log('connect success.');
 
    socket.write('Hello TCP Socket!!');
});