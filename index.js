var http = require('http');
var url = require('url');
var fs = require('fs');
var server = require('./modules/server');
server.create(http, url, fs);
console.log('El servidor esta funcionando correctamente en https://localhost:4000/');