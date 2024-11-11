import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.js'; // Import Dashboard correctly

function Admin() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> {/* Accessible at /admin/dashboard */}
    </Routes>
  );
}

export default Admin;
