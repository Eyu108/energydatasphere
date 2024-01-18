import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = ({ data }) => {
    
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [{
            label: 'Dataset Label',
            data: data.map(d => d.value),
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
        }]
    };

    return (
        <div className="Dashboard">
            <Line data={chartData} />
        </div>
    );
}

export default Dashboard;
