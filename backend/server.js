const app = require('./app');
const http = require('http');
const socketIo = require('socket.io');
const bidSocket = require('./sockets/bidSocket');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

bidSocket(io);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
