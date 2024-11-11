import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import DriverDashboard from '../pages/DriverDashboard';
import CustomerDashboard from '../pages/CustomerDashboard';
import DispatchManagement from '../pages/DispatchManagement';
import RoutePlanning from '../pages/RoutePlanning';
import DriverManagement from '../pages/DriverManagement.js';
import VehicleManagement from '../pages/VehicleManagement';
import Tracking from '../pages/Tracking';
import Reports from '../pages/Reports';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/dispatch" element={<DispatchManagement />} />
        <Route path="/route-planning" element={<RoutePlanning />} />
        <Route path="/driver-management" element={<DriverManagement />} />
        <Route path="/vehicle-management" element={<VehicleManagement />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
