import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Dashboard Widgets */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget: Total Users */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-3xl font-bold">124</p>
          </div>

          {/* Widget: Active Dispatches */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Active Dispatches</h2>
            <p className="text-3xl font-bold">38</p>
          </div>

          {/* Widget: Available Vehicles */}
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">Available Vehicles</h2>
            <p className="text-3xl font-bold">10</p>
          </div>
        </section>

        {/* Detailed Reports */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Detailed Reports</h2>
          <div className="bg-white rounded shadow p-4">
            <p>Report details go here...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
