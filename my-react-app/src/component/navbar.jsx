import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#0f172a',
    color: 'white',
  },
  link: {
    marginLeft: '1rem',
    textDecoration: 'none',
    color: 'white',
  }
};


const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>JobFinder</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/apply" style={styles.link}>Apply</Link>
      </div>
    </nav>
  );
};


export default Navbar;