const http = require('http');
const app = require('./main');

const server = http.createServer(app);


server.listen(8080, function() {
   console.log("success");
});