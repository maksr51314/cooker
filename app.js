var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('sss')
});

app.use(function(req, res, next) {
    if (req.url === '/') {
        res.end('hello')
    } else {
        next();
    }
})

app.use(function(req, res, next) {
    if (req.url === '/test') {
        res.end('tets')
    } else {
        next();
    }
})

app.use(function(req, res, next) {
    res.send('Kiss my ass')
})