import React, { useState, useEffect } from 'react';
import socket from './socket';
import axios from 'axios';

const App = () => {
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState('');
  const [itemId, setItemId] = useState('item1');
  const [bidder, setBidder] = useState('');

  useEffect(() => {
    socket.on('updateBids', (newBid) => {
      setBids((prevBids) => [...prevBids, newBid]);
    });

    return () => {
      socket.off('updateBids');
    };
  }, []);

  const handleBidSubmit = async () => {
    const bidData = { itemId, amount: bidAmount, bidder };
    await axios.post('http://localhost:3000/api/bids', bidData);
    socket.emit('newBid', bidData);
  };

  return (
    <div>
      <h1>Live Bidding</h1>
      <div>
        <input
          type="text"
          value={bidder}
          onChange={(e) => setBidder(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Bid Amount"
        />
        <button onClick={handleBidSubmit}>Place Bid</button>
      </div>
      <div>
        <h2>Bid History</h2>
        <ul>
          {bids.map((bid, index) => (
            <li key={index}>
              {bid.bidder} bid {bid.amount} on {bid.itemId} at {new Date(bid.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
