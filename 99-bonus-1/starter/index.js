// //////////////////////////// vresion 1,node.js read file
// const fs = require('fs');

// const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// console.log(json);
// console.log(laptopData);//console object 

// //////////////////////////// vresion 2,node.js read file
// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// console.log(json);
// console.log(laptopData);//console object 

// const server = http.createServer((req, res) => {
//    console.log('Someone did access the server');
//    res.writeHead(200, { 'Content-type': 'text/html'});
//    res.end('this is response');
// });
// server.listen(1337,'127.0.0.1',()=>{
//     console.log('Listening for requests now');
// });

//////////////////////////// vresion 3,create http request response
const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);
//console.log(__dirname);//console json data
console.log(json);
console.log(laptopData);//console object 

const server = http.createServer((req, res) => {
   console.log('Someone did access the server');//sb access website by browser
   res.writeHead(200, { 'Content-type': 'text/html'});
   res.end('this is response');
});
server.listen(1337,'127.0.0.1',()=>{
    console.log('Listening for requests now');
});