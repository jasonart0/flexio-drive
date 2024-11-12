import React from 'react';
import StatsCards from '../../widgets/StatsCards';
import OverviewGraph from '../LineGraph';
import LineGraph from '../LineGraph';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <StatsCards />
      <LineGraph />
    </div>
  );
};

export default Dashboard;
