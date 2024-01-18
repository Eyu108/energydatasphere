// In frontend/src/components/Dashboard.js
const React, { useEffect, useState } = require('react');
const axios = require('axios');
const { WebSocket } = require('ws');

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    return () => ws.close();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Add visualization components here */}
      {/* Example: <BarChart data={data.boePerDay} /> */}
      <p>Latest Data: {JSON.stringify(data)}</p>
    </div>
  );
}

module.exports = Dashboard;
