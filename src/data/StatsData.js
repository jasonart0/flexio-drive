import React from 'react';
import StatsCards from './StatsCards'; // Import the StatsCards component

const statsData = [
  { title: "Total Users", value: 124 },
  { title: "Active Users", value: 90 },
  { title: "New Signups", value: 35 },
  { title: "Pending Approvals", value: 10 }
];

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <StatsCards statsData={statsData} /> {/* Pass the statsData as a prop */}
    </div>
  );
}

export default App;
