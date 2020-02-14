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
// //////////////////////////// vresion 5,create http route
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
//    const queryTotal =url.parse(req.url, true);
//    console.log("queryTotal: ",queryTotal);
//    const pathName =url.parse(req.url, true).pathname;
//    console.log("pathName: ",pathName);
//    const query =url.parse(req.url, true).query;
//    const id =url.parse(req.url, true).query.id;
//    console.log("query: ",query,id);
//    console.log("ID: ",id);
//    if (pathName === '/products'|| pathName ===''){//node.js route
//     res.writeHead(200, { 'Content-type': 'text/html'});
//     res.end('this is products page');
//    } else if (pathName === '/laptop'&& id < laptopData.length){//id < laptopData.length make sure right range,if 5 will goto next else

//     res.writeHead(200, { 'Content-type': 'text/html'});
//     //res.end('this is laptop page'); //change from ' to ` to get id value
//     res.end(`this is laptop page ${id}!`);
//    } else {
//     res.writeHead(404, { 'Content-type': 'text/html'});
//     res.end('url was not found on the server');
//    }

// });
// server.listen(1337,'127.0.0.1',()=>{
//     console.log('Listening for requests now');
// });

// //////////////////////////// vresion 6,create latop html
// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// // console.log(json);
// // console.log(laptopData);//console object

// const server = http.createServer((req, res) => {
//   console.log("Someone did access the server"); //sb access website by browser
//   const queryTotal = url.parse(req.url, true);
//   console.log("queryTotal: ", queryTotal);
//   const pathName = url.parse(req.url, true).pathname;
//   console.log("pathName: ", pathName);
//   const query = url.parse(req.url, true).query;
//   const id = url.parse(req.url, true).query.id;
//   console.log("query: ", query, id);
//   console.log("ID: ", id);
//   console.log("IlaptopData.length: ", laptopData.length);
//  // PRODUCTS OVERVIEW
//   if (pathName === "/products" || pathName === "") {
//     //node.js route
//     res.writeHead(200, { "Content-type": "text/html" });
//     res.end("this is products page");
//   } else if (pathName === "/laptop" && id < laptopData.length) {
//     //id < laptopData.length make sure right range,if 5 will goto next else

//     res.writeHead(200, { "Content-type": "text/html" });
//     //res.end('this is laptop page'); //change from ' to ` to get id value
//     // res.end(`this is laptop page ${id}!`);//comment out after real codes
//    //async mode
//     fs.readFile(
//       `${__dirname}/templates/template-laptop.html`,
//       "utf-8",
//       (err, data) => {
//             const laptop = laptopData[id];
//             console.log("laptopDatadata: ",laptop);
//            //following found repeat code when do overview ,so will be dry as function
//             let output = data.replace(/{%PRODUCTNAME%}/g, laptop.productName);
//             output = output.replace(/{%IMAGE%}/g, laptop.image); //replace all quote to / for regular expression
//             output = output.replace(/{%PRICE%}/g, laptop.price);
//             output = output.replace(/{%SCREEN%}/g, laptop.screen);
//             output = output.replace(/{%CPU%}/g, laptop.cpu);
//             output = output.replace(/{%STORAGE%}/g, laptop.storage);
//             output = output.replace(/{%RAM%}/g, laptop.ram);
//             output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
//           res.end(output);
//         // end of will be dried
//         });
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("url was not found on the server");
//   }
// });
// server.listen(1337, "127.0.0.1", () => {
//   console.log("Listening for requests now");
// });

// //////////////////////////// vresion 7,create overview html
// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// // console.log(json);
// // console.log(laptopData);//console object

// const server = http.createServer((req, res) => {

// //   const queryTotal = url.parse(req.url, true);
// //   console.log("queryTotal: ", queryTotal);
//   const pathName = url.parse(req.url, true).pathname;
//   console.log("pathName: ", pathName);
//   const query = url.parse(req.url, true).query;
//   const id = url.parse(req.url, true).query.id;
//   console.log("query: ", query);
//   console.log("ID: ", id);
//   console.log("laptopData.length: ", laptopData.length);
//  // PRODUCTS OVERVIEW
//   if (pathName === "/products" || pathName === "") {
//     //node.js route
//     res.writeHead(200, { "Content-type": "text/html" });
//     fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
//         res.end(data);
//     });
//       // LAPTOP DETAIL
//   } else if (pathName === "/laptop" && id < laptopData.length) {
//     //id < laptopData.length make sure right range,if 5 will goto next else

//     res.writeHead(200, { "Content-type": "text/html" });
//     //res.end('this is laptop page'); //change from ' to ` to get id value
//     // res.end(`this is laptop page ${id}!`);//comment out after real codes
//    //async mode
//     fs.readFile(
//       `${__dirname}/templates/template-laptop.html`,
//       "utf-8",
//       (err, data) => {
//             const laptop = laptopData[id];
//            // console.log("laptopDatadata: ",laptop);
//            //following found repeat code when do overview ,so will be dry as function
//             // let output = data.replace(/{%PRODUCTNAME%}/g, laptop.productName);
//             // output = output.replace(/{%IMAGE%}/g, laptop.image); //replace all quote to / for regular expression
//             // output = output.replace(/{%PRICE%}/g, laptop.price);
//             // output = output.replace(/{%SCREEN%}/g, laptop.screen);
//             // output = output.replace(/{%CPU%}/g, laptop.cpu);
//             // output = output.replace(/{%STORAGE%}/g, laptop.storage);
//             // output = output.replace(/{%RAM%}/g, laptop.ram);
//             // output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
//             const output = replaceTemplate(data, laptop);
//             res.end(output);
//         // end of will be dried
//         });
//           // URL NOT FOUND
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("url was not found on the server");
//   }
// });
// server.listen(1337, "127.0.0.1", () => {
//   console.log("Listening for requests now");
// });
// function replaceTemplate(originalHtml, laptop) {
//     let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
//     output = output.replace(/{%IMAGE%}/g, laptop.image);
//     output = output.replace(/{%PRICE%}/g, laptop.price);
//     output = output.replace(/{%SCREEN%}/g, laptop.screen);
//     output = output.replace(/{%CPU%}/g, laptop.cpu);
//     output = output.replace(/{%STORAGE%}/g, laptop.storage);
//     output = output.replace(/{%RAM%}/g, laptop.ram);
//     output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
//     output = output.replace(/{%ID%}/g, laptop.id);
//     return output;
// }

// //////////////////////////// vresion 7,create overview html
// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// // console.log(json);
// // console.log(laptopData);//console object

// const server = http.createServer((req, res) => {
//   //   const queryTotal = url.parse(req.url, true);
//   //   console.log("queryTotal: ", queryTotal);
//   const pathName = url.parse(req.url, true).pathname;
//   console.log("pathName: ", pathName);
//   const query = url.parse(req.url, true).query;
//   const id = url.parse(req.url, true).query.id;
//   console.log("query: ", query);
//   console.log("ID: ", id);
//   console.log("laptopData.length: ", laptopData.length);
//  // PRODUCTS OVERVIEW
//   if (pathName === "/products" || pathName === "") {
//     //node.js route
//     res.writeHead(200, { "Content-type": "text/html" });
//     fs.readFile(
//       `${__dirname}/templates/template-overview.html`,
//       "utf-8",
//       (err, data) => {
//         fs.readFile(
//           `${__dirname}/templates/template-card.html`,
//           "utf-8",
//           (err, data) => {
//               //use map loop each and replace each to create new array
//             const cardsOutput = laptopData.map(el => replaceTemplate(data, el));
//             console.log(cardsOutput);
//             res.end(data);
//           }
//         );
//       }
//     );
//     // LAPTOP DETAIL
//   } else if (pathName === "/laptop" && id < laptopData.length) {
//     //id < laptopData.length make sure right range,if 5 will goto next else

//     res.writeHead(200, { "Content-type": "text/html" });
//     //res.end('this is laptop page'); //change from ' to ` to get id value
//     // res.end(`this is laptop page ${id}!`);//comment out after real codes
//     //async mode
//     fs.readFile(
//       `${__dirname}/templates/template-laptop.html`,
//       "utf-8",
//       (err, data) => {
//         const laptop = laptopData[id];
//         // console.log("laptopDatadata: ",laptop);
//         //following found repeat code when do overview ,so will be dry as function
//         // let output = data.replace(/{%PRODUCTNAME%}/g, laptop.productName);
//         // output = output.replace(/{%IMAGE%}/g, laptop.image); //replace all quote to / for regular expression
//         // output = output.replace(/{%PRICE%}/g, laptop.price);
//         // output = output.replace(/{%SCREEN%}/g, laptop.screen);
//         // output = output.replace(/{%CPU%}/g, laptop.cpu);
//         // output = output.replace(/{%STORAGE%}/g, laptop.storage);
//         // output = output.replace(/{%RAM%}/g, laptop.ram);
//         // output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
//         const output = replaceTemplate(data, laptop);
//         res.end(output);
//         // end of will be dried
//       }
//     );
//     // URL NOT FOUND
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("url was not found on the server");
//   }
// });
// server.listen(1337, "127.0.0.1", () => {
//   console.log("Listening for requests now");
// });
// function replaceTemplate(originalHtml, laptop) {
//   let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
//   output = output.replace(/{%IMAGE%}/g, laptop.image);
//   output = output.replace(/{%PRICE%}/g, laptop.price);
//   output = output.replace(/{%SCREEN%}/g, laptop.screen);
//   output = output.replace(/{%CPU%}/g, laptop.cpu);
//   output = output.replace(/{%STORAGE%}/g, laptop.storage);
//   output = output.replace(/{%RAM%}/g, laptop.ram);
//   output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
//   output = output.replace(/{%ID%}/g, laptop.id);
//   return output;
// }

// //////////////////////////// vresion 7,create overview html,use array.join('') to create into one single string
// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
// const laptopData = JSON.parse(json);
// //console.log(__dirname);//console json data
// // console.log(json);
// // console.log(laptopData);//console object

// const server = http.createServer((req, res) => {
//   //   const queryTotal = url.parse(req.url, true);
//   //   console.log("queryTotal: ", queryTotal);
//   const pathName = url.parse(req.url, true).pathname;
//   console.log("pathName: ", pathName);
//   const query = url.parse(req.url, true).query;
//   const id = url.parse(req.url, true).query.id;
//   console.log("query: ", query);
//   console.log("ID: ", id);
//   console.log("laptopData.length: ", laptopData.length);
//  // PRODUCTS OVERVIEW
//   if (pathName === "/products" || pathName === "") {
//     //node.js route
//     res.writeHead(200, { "Content-type": "text/html" });
//     fs.readFile(
//       `${__dirname}/templates/template-overview.html`,
//       "utf-8",
//       (err, data) => {
//         fs.readFile(
//           `${__dirname}/templates/template-card.html`,
//           "utf-8",
//           (err, data) => {
//               //use map loop each and replace each to create new array
//             const cardsOutput = laptopData.map(el => replaceTemplate(data, el)).join('');
//             console.log(cardsOutput);
//             res.end(data);
//           }
//         );
//       }
//     );
//     // LAPTOP DETAIL
//   } else if (pathName === "/laptop" && id < laptopData.length) {
//     //id < laptopData.length make sure right range,if 5 will goto next else

//     res.writeHead(200, { "Content-type": "text/html" });
//     //res.end('this is laptop page'); //change from ' to ` to get id value

//     //async mode
//     fs.readFile(
//       `${__dirname}/templates/template-laptop.html`,
//       "utf-8",
//       (err, data) => {
//         const laptop = laptopData[id];

//         const output = replaceTemplate(data, laptop);
//         res.end(output);

//       }
//     );
//     // URL NOT FOUND
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("url was not found on the server");
//   }
// });
// server.listen(1337, "127.0.0.1", () => {
//   console.log("Listening for requests now");
// });
// function replaceTemplate(originalHtml, laptop) {
//   let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
//   output = output.replace(/{%IMAGE%}/g, laptop.image);
//   output = output.replace(/{%PRICE%}/g, laptop.price);
//   output = output.replace(/{%SCREEN%}/g, laptop.screen);
//   output = output.replace(/{%CPU%}/g, laptop.cpu);
//   output = output.replace(/{%STORAGE%}/g, laptop.storage);
//   output = output.replace(/{%RAM%}/g, laptop.ram);
//   output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
//   output = output.replace(/{%ID%}/g, laptop.id);
//   return output;
// }

//////////////////////////// vresion 7,create overview html,respond to images requests

const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);
//console.log(__dirname);//console json data
// console.log(json);
// console.log(laptopData);//console object

const server = http.createServer((req, res) => {
  //   const queryTotal = url.parse(req.url, true);
  //   console.log("queryTotal: ", queryTotal);
  const pathName = url.parse(req.url, true).pathname;
  console.log("pathName: ", pathName);
  const query = url.parse(req.url, true).query;
  const id = url.parse(req.url, true).query.id;
    console.log("query: ", query);
    console.log("ID: ", id);
  //   console.log("laptopData.length: ", laptopData.length);
  // PRODUCTS OVERVIEW
  if (pathName === "/products" || pathName === "") {
    //node.js route
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile(
      `${__dirname}/templates/template-overview.html`,
      "utf-8",
      (err, data) => {
        let overviewOutput = data;
        fs.readFile(
          `${__dirname}/templates/template-card.html`,
          "utf-8",
          (err, data) => {
            //use map loop each and replace each to create new array
            const cardsOutput = laptopData
              .map(el => replaceTemplate(data, el))
              .join("");
            // console.log(cardsOutput);//comment out to real output
            // res.end(data);//comment out to real output
            overviewOutput = overviewOutput.replace("{%CARDS%}", cardsOutput);
            res.end(overviewOutput);
          }
        );
      }
    );
    // LAPTOP DETAIL
  } else if (pathName === "/laptop" && id < laptopData.length) {
    //id < laptopData.length make sure right range,if 5 will goto next else

    res.writeHead(200, { "Content-type": "text/html" });
    //res.end('this is laptop page'); //change from ' to ` to get id value

    //async mode
    fs.readFile(
      `${__dirname}/templates/template-laptop.html`,
      "utf-8",
      (err, data) => {
        const laptop = laptopData[id];

        const output = replaceTemplate(data, laptop);
        res.end(output);
      }
    );
  }
  // IMAGES
  else if (/\.(jpg|jpeg|png|gif)$/i.test(pathName)) {
    fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(data);
    });
  }
  // URL NOT FOUND
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("url was not found on the server");
  }
});
server.listen(1337, "127.0.0.1", () => {
  console.log("Listening for requests now");
});
function replaceTemplate(originalHtml, laptop) {
  let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
  output = output.replace(/{%IMAGE%}/g, laptop.image);
  output = output.replace(/{%PRICE%}/g, laptop.price);
  output = output.replace(/{%SCREEN%}/g, laptop.screen);
  output = output.replace(/{%CPU%}/g, laptop.cpu);
  output = output.replace(/{%STORAGE%}/g, laptop.storage);
  output = output.replace(/{%RAM%}/g, laptop.ram);
  output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
  output = output.replace(/{%ID%}/g, laptop.id);
  return output;
}
