var express = require('express');
var http = require('http');
var path = require('path');
//var config = require('config1');

var app = express();
app.set('port', 3000);
app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);

app.get('/', function(req, res, next) {
    res.end('get request');
})

//app.use(express.static(path.join(__dirname, )))

http.createServer(app).listen(app.get('port'), function() {
    console.log('sss')
});

//app.use(function(req, res, next) {
//    if (req.url === '/') {
//        res.end('hello')
//    } else {
//        next();
//    }
//})
//
//app.use(function(req, res, next) {
//    if (req.url === '/test') {
//        res.end('tets')
//    } else {
//        next();
//    }
//})
//
//app.use(function(req, res, next) {
//    res.send(app.get('env'))
//})