import React from 'react';
import jobs from '../data/job.js';
import JobCard from '../component/JobCard';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Jobs</h1>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Home;