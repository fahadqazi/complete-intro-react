var React = require('react')
import '../public/css/Landing.css';

const Landing = () => (
    <div className="app-container">
      <div className="home-info">
        <h1 className="title">SVideo</h1>
        <input type="text" className="search" placeholder="Search"/>
        <button className="browse-all">or Browse All !!!</button>
      </div>
    </div>
  );

 module.exports = Landing;