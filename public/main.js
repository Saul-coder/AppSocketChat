var socket = io.connect('http://localhost:8080',{'forceNew':true});

socket.on('messages',function(data){
    console.log(data);
    render(data);
});

function render(dato){
    var html = dato.map(function(elem, index){
        return(`<div>
        <strong>${elem.author}</stronge>;
        <em>${elem.text}</em>
        </div>`);
    }).join(" ");
    
    document.getElementById('messages').innerHTML=html;
};

function addMessages(e){
    var payload = {
        author: document.getElementById('username').value,
        texto: document.getElementById('texto').value
    };

    socket.emit('new-Message',payload);
    return false;
}