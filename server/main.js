var express = require('express');
var app= express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var message = [{
    id:1,
    text: "Hola soy un mensaje",
    author: "Saul Antonio"
}];

app.use(express.static('public'));

app.get('/hello', function(req, res){
    res.status(200).send("Hello World!");
});

io.on('connection',function(socket){
    console.log('Alguien se ha conectado con socket');
    socket.emit('messages',message);

    socket.on('new-Message', function(data){
        message.push(data);
        io.emit('messages',message);
    });
});

server.listen(8080,'0.0.0.0',function() {
    console.log("Servidor corriendo en http://localhost:8080");
});