import { Routes, Route } from 'react-router-dom';
// pages
import Dashboard from './pages/Dashboard'; 
import UserManagement from './pages/UserManagement';
import Dispatches from './pages/Dispatches';
import Vehicles from './pages/Vehicles';
import Reports from './pages/Reports';
//components
import Header from '../components/Header.js';
import Sidebar from '../widgets/Sidebar.js';
function Admin() {
  return (
    <div>
      <Header />
      <div className='content-area'>
        <Sidebar />
        <div className='content-panel'>
          <Routes>
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/dispatches" element={<Dispatches />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Admin;
