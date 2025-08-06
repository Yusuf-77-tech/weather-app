import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
  },
  button: {
    marginTop: '1rem',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
  }
};

const JobCard = ({ job }) => {
  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <Link to={`/jobs/${job.id}`} style={styles.button}> View Details </Link>
    </div>
  );
};



export default JobCard;

