var express = require('express');
var app = express();
var shell = require('shelljs');
var server = require('http').Server(app);

server.listen(8080);
console.log('Server created on port 8080. Access it here http://localhost');

app.get('/api/up', function (req, res) {
	shell.exec('python up.py ' + req.query.angle);
	res.send('Going Up!');
});

app.get('/api/down', function (req, res) {
	shell.exec('python down.py ' + req.query.angle);
	res.send('Going Down!');
});

app.get('/api/left', function (req, res) {
	shell.exec('python left.py ' + req.query.angle);
	res.send('Going Left!');
});

app.get('/api/right', function (req, res) {
	shell.exec('python right.py ' + req.query.angle);
	res.send('Going Right:!');
});


app.get('/api/reset', function (req, res) {
	shell.exec('python reset.py');
	res.send('Resetting!');
});

const LiveCam = require('livecam');
const webcam_server = new LiveCam
({
    // address and port of the webcam UI
    'ui_addr' : '192.168.0.22',
    'ui_port' : 11000,
 
    // address and port of the webcam Socket.IO server
    // this server broadcasts GStreamer's video frames
    // for consumption in browser side.
    'broadcast_addr' : '192.168.0.22',
    'broadcast_port' : 12000,
 
    // address and port of GStreamer's tcp sink
    'gst_tcp_addr' : '127.0.0.1',
    'gst_tcp_port' : 10000,
    
    // callback function called when server starts
    'start' : function() {
        console.log('WebCam server started!');
    },
    
    // webcam object holds configuration of webcam frames
    'webcam' : {
        
        // should frames be converted to grayscale (default : false)
        'grayscale' : true,
        
        // should width of the frame be resized (default : 0)
        // provide 0 to match webcam input
        'width' : 250,
 
        // should height of the frame be resized (default : 0)
        // provide 0 to match webcam input
        'height' : 250,
        
        // should a fake source be used instead of an actual webcam
        // suitable for debugging and development (default : false)
        'fake' : false,
        
        // framerate of the feed (default : 0)
        // provide 0 to match webcam input
        'framerate' : 24
    }
});

webcam_server.broadcast();
