// Header.js
import React from 'react';


const SideBar = ({ userRole }) => {
  
  return (
      
       <aside className="">
      
       <nav>
         <ul className="space-y-4">
           <li><a href="#overview" className="block hover:bg-gray-700 p-2 rounded">Overview</a></li>
           <li><a href="#users" className="block hover:bg-gray-700 p-2 rounded">User Management</a></li>
           <li><a href="#dispatches" className="block hover:bg-gray-700 p-2 rounded">Dispatches</a></li>
           <li><a href="#vehicles" className="block hover:bg-gray-700 p-2 rounded">Vehicles</a></li>
           <li><a href="#reports" className="block hover:bg-gray-700 p-2 rounded">Reports</a></li>
         </ul>
       </nav>
     </aside>
  
  );
};

export default SideBar;
