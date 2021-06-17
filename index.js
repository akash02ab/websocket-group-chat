// const Websocket = require('ws');
// const PORT = 3030;

// const server = new Websocket.Server({
//     port: PORT
// });

// server.on('connection', (socket) => {
//     console.log('Someone Connected');
//     socket.send('Thanks for the message');
//     socket.on('message', (data) => {
//         console.log(data)
//         socket.send('You have send ' + data);
//     });
// });

const http = require('http').createServer();

const socket = require('socket.io');

const io = socket(http, {
    cors: {origin: '*'}
});

io.on('connection', (socket) => {
    console.log('Client Connected', socket.id);
    socket.on('message', (data) => {
        io.emit('message', `${socket.id.slice(0, 4)} : ${data}`);
    })
});

const PORT = 8080;

http.listen(PORT, () => console.log("listening on http://localhost:8080"));