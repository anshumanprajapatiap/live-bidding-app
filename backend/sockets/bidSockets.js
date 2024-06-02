const Bid = require('../models/Bid');

const bidSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('newBid', async (data) => {
      const newBid = new Bid(data);
      await newBid.save();
      io.emit('updateBids', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = bidSocket;
