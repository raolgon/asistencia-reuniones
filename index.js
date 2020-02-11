const http = require('http');
const url = require('url');
const fs = require('fs');
const server = require('./modules/server');
server.create(http, url, fs);
console.log('El servidor esta funcionando correctamente en http://localhost:4000/');