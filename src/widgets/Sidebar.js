import React from 'react';
import { sidebarItems } from '../data/SidebarData';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar">
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <Link to={item.href.replace('#', '/')}>
              <i className={item.icon}></i>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </aside>
  );
};

export default Sidebar;
