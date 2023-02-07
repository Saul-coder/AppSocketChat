var express = require('express');
var app= express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/hello', function(re, res){
    res.status(200).send("Hello World!");
})

io.on('connection',function(socket){
    console.log('Alguien se ha conectado con socket');
    socket.emit('messages',{
        id:1,
        text: "Hola soy un mensaje",
        author: "Saul Antonio"
    })
})

server.listen(8080,function() {
    console.log("Servidor corriendo en http://localhost:8080");
})