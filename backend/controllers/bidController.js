const Bid = require('../models/Bid');

exports.createBid = async (req, res) => {
  try {
    const newBid = new Bid(req.body);
    const bid = await newBid.save();
    res.json(bid);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
