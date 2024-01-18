// In frontend/src/components/Header.js
const React = require('react');
import './Header.css'; // Make sure to create and style Header.css as per your design

function Header() {
  return (
    <header className="app-header">
      <h1>Energy Data Sphere</h1>
      {/* Additional navigation or branding can go here */}
    </header>
  );
}

module.exports = Header;
