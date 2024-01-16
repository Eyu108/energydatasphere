// In frontend/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WebSocket } from 'ws';

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

export default Dashboard;
