//wss://kakeru-lottery-api.javis.vn/socket.io
// const io = require('socket.io-client');

// const SOCKET_URL = 'wss://socketsbay.com/wss/v2/1/demo/'; // Replace with your server URL

// const socket = io.connect(SOCKET_URL, {
//     secure: true,
// });

// // Handle incoming messages from the server
// socket.on('message', (message) => {
//   console.log('Received message from server:', message);
// });

// // Send a message to the server
// socket.emit('message', 'Hello from client');

// // Handle disconnection
// socket.on('disconnect', () => {
//   console.log('Server disconnected');
// });

const io = require('socket.io-client');

// const SOCKET_URL = 'wss://kakeru-lottery-api.javis.vn/socket.io'; // Replace with your server URL
const SOCKET_URL = 'https://kakeru-lottery-api.javis.vn'
// const socket = io.connect('http://localhost:3000');
console.log(11)
const socket = io.connect(SOCKET_URL, { path: '/socket.io'});
console.log(1122, socket)
socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('error', (error) => {
  console.error('Error:', error);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

try {
  socket.emit('message', 'Hello from client');
} catch (error) {
  console.error('Error sending message:', error);
}

try {
  socket.on('message', (data) => {
    console.log(`Received message: ${data}`);
  });
} catch (error) {
  console.error('Error receiving message:', error);
}