const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fetchDataFromCommoditiesAPI = require('./api/companyReportsAPI.js');
const Metrics = require('./metricsModel');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');

  const sendLatestData = async () => {
    const latestData = await Metrics.find({}).sort({ dateRecorded: -1 }).limit(1);
    ws.send(JSON.stringify(latestData));
  };

  sendLatestData(); // Send latest data on new connection
  const intervalId = setInterval(sendLatestData, 5000); // Update every 5 seconds

  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('WebSocket client disconnected');
  });
});

app.get('/api/data', async (req, res) => {
  const allData = await Metrics.find({});
  res.json(allData);
});

// Periodically fetch new data
setInterval(fetchDataFromCommoditiesAPI, 3600000); // Fetch new data every hour

// Existing server setup code...

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
