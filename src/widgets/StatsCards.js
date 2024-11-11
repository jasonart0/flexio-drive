import React from 'react';

const statsData = [
  { title: "Total Users", value: 124 },
  { title: "Active Users", value: 90 },
  { title: "New Signups", value: 35 },
  { title: "Pending Approvals", value: 10 }
];

function StatsCards() {
  return (
    <div className='row'>
      {statsData.map((stat, index) => (
        <div className="col-md-4">
        <div key={index} className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">{stat.title}</h2>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
