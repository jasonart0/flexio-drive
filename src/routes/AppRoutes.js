import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login.js'; // Import the Login page component, not the MUI icon
import Admin from '../admin/Admin';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Accessible at /login */}
        <Route path="/admin/*" element={<Admin />} /> {/* * allows nested routes in Admin */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
