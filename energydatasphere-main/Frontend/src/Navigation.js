
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed

const Navigation = () => (
    <nav className="container-fluid">
        <ul>
            <li><strong>Commodities Dashboard</strong></li>
        </ul>
        <ul>
            <li><Link to="#visualData">Visual Data</Link></li>
            <li><Link to="#analysis">Analyze Trends</Link></li>
            <li><Link to="#subscribe" role="button">Subscribe</Link></li>
        </ul>
    </nav>
);

export default Navigation;
