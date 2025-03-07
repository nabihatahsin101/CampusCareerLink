
import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import './Sidebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar sidebar-responsive' : 'sidebar'}
    >
      <div className="sidebar-title">
        
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/adminHome">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
      
        <li className="sidebar-list-item">
          <a href="adminCirculars">
            <BsFillGrid3X3GapFill className="icon" /> Circular
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/userManagement">
            <BsPeopleFill className="icon" /> Manage Users
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Applications Management
          </a>
        </li>
        
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" />LogOut
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
