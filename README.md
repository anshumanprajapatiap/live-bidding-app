


live-bidding-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   ├── app.js
│   ├── server.js
│   └── config/
│       └── database.js
├── frontend/
│   ├── public/
│   ├── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       ├── index.js
│       └── socket.js
├── .gitignore
├── package.json
└── README.md





mkdir backend
cd backend
npm init -y
npm install express mongoose socket.io cors




npx create-react-app frontend
cd frontend
npm install socket.io-client axios
