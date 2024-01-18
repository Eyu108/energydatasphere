const express = require('express');
const axios = require('axios');
const http = require('http');
const WebSocket = require('ws');
const path = require('path'); // Added for serving static files
const fetchDataFromCommoditiesAPI = require('./api/companyReportsAPI.js');
const Metrics = require('./models/metricsModel.js');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  // ... WebSocket code ...
});

// Simple root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to Energy Data Sphere');
});

app.get('/api/data', async (req, res) => {
  // ... Existing /api/data route ...
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend')));

// Anything that doesn't match the above, send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend', 'App.js'));
});

// Periodically fetch new data
setInterval(fetchDataFromCommoditiesAPI, 3600000); // Fetch new data every hour

// ... Existing server setup code ...

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
