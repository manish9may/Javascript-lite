const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../')));

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.emit('message', {'message': msg});
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
const port = process.env.port || 3000;
app.use("/first-route",routes);
http.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});