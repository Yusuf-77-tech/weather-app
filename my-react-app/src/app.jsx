import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import JobDetails from './component/jobdetails';
import Navbar from './component/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </>
  );
}

export default App;