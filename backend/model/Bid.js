const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  bidder: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bid', BidSchema);
