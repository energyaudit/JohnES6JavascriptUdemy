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

// //////////////////////////// vresion 3,create http request response
// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// // console.log(json);
// // console.log(laptopData);//console object 

// const server = http.createServer((req, res) => {
//    console.log('Someone did access the server');//sb access website by browser
//    res.writeHead(200, { 'Content-type': 'text/html'});
//    res.end('this is response');
// });
// server.listen(1337,'127.0.0.1',()=>{
//     console.log('Listening for requests now');
// });

// //////////////////////////// vresion 4,create http route
// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// // console.log(json);
// // console.log(laptopData);//console object 

// const server = http.createServer((req, res) => {
//    console.log('Someone did access the server');//sb access website by browser
//    const query =url.parse(req.url, true);
//    console.log(query);
//    const pathName =url.parse(req.url, true).pathname;
//    console.log(pathName);
//    if (pathName === '/products'|| pathName ===''){//node.js route
//     res.writeHead(200, { 'Content-type': 'text/html'});
//     res.end('this is products page'); 
//    } else if (pathName === '/laptop'){
//     res.writeHead(200, { 'Content-type': 'text/html'});
//     res.end('this is laptop page'); 
//    } else {
//     res.writeHead(404, { 'Content-type': 'text/html'});
//     res.end('url was not found on the server'); 
//    }
  
// });
// server.listen(1337,'127.0.0.1',()=>{
//     console.log('Listening for requests now');
// });
//////////////////////////// vresion 5,create http route
const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);
//console.log(__dirname);//console json data
// console.log(json);
// console.log(laptopData);//console object 

const server = http.createServer((req, res) => {
   console.log('Someone did access the server');//sb access website by browser
   const queryTotal =url.parse(req.url, true);
   console.log("queryTotal: ",queryTotal);
   const pathName =url.parse(req.url, true).pathname;
   console.log("pathName: ",pathName);
   const query =url.parse(req.url, true).query;
   const id =url.parse(req.url, true).query.id;
   console.log("query: ",query,id);
   console.log("ID: ",id);
   if (pathName === '/products'|| pathName ===''){//node.js route
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end('this is products page'); 
   } else if (pathName === '/laptop'&& id < laptopData.length){//id < laptopData.length make sure right range,if 5 will goto next else
    
    res.writeHead(200, { 'Content-type': 'text/html'});
    //res.end('this is laptop page'); //change from ' to ` to get id value 
    res.end(`this is laptop page ${id}!`);
   } else {
    res.writeHead(404, { 'Content-type': 'text/html'});
    res.end('url was not found on the server'); 
   }
  
});
server.listen(1337,'127.0.0.1',()=>{
    console.log('Listening for requests now');
});