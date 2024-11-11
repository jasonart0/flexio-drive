import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.js'; // Import Dashboard correctly
import AppHeader from '../components/AppHeader.js';
import SideBar from '../components/SideBar.js';
function Admin() {
  return (
    <div>
      <AppHeader />
      <div className='content-area'>
        <SideBar />
        <div className='content-panel'>
        <Routes>
      <Route path="/" element={<Dashboard />} /> {/* Accessible at /admin/dashboard */}
    </Routes>
        </div>
      </div>
   
    </div>
  );
}

export default Admin;
