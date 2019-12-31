var request = require("request");

var options = { method: 'POST',
  url: 'https://airmiles-test.auth0.com/oauth/token',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Cookie: 'did=s%3Av0%3Ab29d9600-eb6f-11e9-b499-af5bb63443f7.msrVquTP1sC2op0IMOwqFkoY%2FGnwOM3FYF97G5z6dcE',
     'Content-Length': '210',
     'Accept-Encoding': 'gzip, deflate',
     'Content-Type': 'application/x-www-form-urlencoded',
     Host: 'airmiles-test.auth0.com',
     'Postman-Token': 'a0fb858f-9e35-45f3-b912-3789bca885bc,7079c7c8-62e2-4c52-a379-800e8a1c6464',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.18.0' },
  form: 
   { grant_type: 'password',
     client_id: '9NIMemNcEo92AUgDdaYDJhZ61EjvDTJ5',
     client_secret: 'gmx-KmAX3xE76Admbb4iahWoFjX4E67We4siuuBbyDP8B_wrm7W-Tmu64kRsb_KZ',
     audience: 'http://example.com',
     username: '80000009950',
     password: '1234' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});