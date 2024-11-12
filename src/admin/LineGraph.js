import React from 'react';
import { Line } from 'react-chartjs-2'; // Import the Line chart component from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components needed for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = () => {
  // Sample data for the chart (representing Customer, Driver, Dispatcher data over 7 months)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // x-axis labels (months)
    datasets: [
      {
        label: 'Customers', // Data label for Customers
        data: [120, 150, 180, 200, 220, 250, 280], // Customer data points for each month
        borderColor: 'rgba(54, 162, 235, 1)', // Line color for Customers
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill color under the line
        fill: true,
        tension: 0.1,
      },
      {
        label: 'Drivers', // Data label for Drivers
        data: [60, 75, 90, 110, 130, 150, 170], // Driver data points for each month
        borderColor: 'rgba(75, 192, 192, 1)', // Line color for Drivers
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color under the line
        fill: true,
        tension: 0.1,
      },
      {
        label: 'Dispatchers', // Data label for Dispatchers
        data: [10, 12, 14, 16, 18, 20, 22], // Dispatcher data points for each month
        borderColor: 'rgba(255, 159, 64, 1)', // Line color for Dispatchers
        backgroundColor: 'rgba(255, 159, 64, 0.2)', // Fill color under the line
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Role Distribution Line', // Title of the chart
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months', // x-axis title
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Roles', // y-axis title
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='col-md-6'>
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Role Distribution Line</h2>
      <Line data={data} options={options} /> {/* Render the Line chart */}
    </div>
    </div>
  );
};

export default LineGraph;
