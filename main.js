
// let socket = new WebSocket("ws://localhost:3030");

// socket.onopen = (e) => {
//     socket.send('Connected to Server');
// }

// socket.onclose = (e) => {
//     console.log('Server closed');
// }

// socket.onmessage = (msg) => {
//     console.log(msg.data);
//     messageElement.innerText = msg.data;
// }

let messageElement = document.getElementById("message");
let inputElement = document.getElementById("msg-input");
let buttonElement = document.getElementById("send");
let chatContainer = document.querySelector('ul');
const socket = io("ws://localhost:8080");

socket.on('connect', () => {
    console.log("connection established");
})

socket.on('message', (data) => {
    console.log(data);
    let listElement = document.createElement('li');
    listElement.innerText = data;
    chatContainer.appendChild(listElement);
})

buttonElement.addEventListener('click', (event) => {
    socket.send(inputElement.value);
});