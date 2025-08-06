import { useParams } from 'react-router-dom';
import jobs from '../data/job.js';

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description || 'No description provided.'}</p>
    </div>
  );
};

export default JobDetails;