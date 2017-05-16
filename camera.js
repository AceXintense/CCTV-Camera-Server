// var express = require('express');
// var app = express();
// var shell = require('shelljs');
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
//
// server.listen(80);
// app.use(express.static('public'));
// console.log('Server created on port 80. Access it here http://localhost');
//
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });

var LiveCam = require('livecam');
var webcam_server = new LiveCam({
    'start' : function() {
        console.log('WebCam server started!');
    }
});

webcam_server.broadcast();