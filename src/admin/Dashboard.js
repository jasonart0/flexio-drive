import React from 'react';
import StatsCards from '../widgets/StatsCards';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
   

    <StatsCards />


        {/* Detailed Reports */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Detailed Reports</h2>
          <div className="bg-white rounded shadow p-4">
            <p>Report details go here...</p>
          </div>
        </section>
 
    </div>
  );
};

export default Dashboard;
