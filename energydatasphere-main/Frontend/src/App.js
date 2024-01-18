import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('/api/data')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="container mt-5">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && <Dashboard data={data} />}
            </div>
        </div>
    );
}

export default App;
