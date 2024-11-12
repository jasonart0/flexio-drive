import React from 'react';
import { Navbar, Nav, Form, FormControl, Dropdown, Badge } from 'react-bootstrap';
import SearchBar from '../widgets/SearchBar';
import images from '../configs/AppImages';

const Header = () => {
  return (
    <header>
      <div className='container-fluid'>
        <Navbar  expand="lg" className="">
          <Navbar.Brand href="#home"><img src={images.LOGO} alt="App Logo" /> </Navbar.Brand>
          <SearchBar />
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="notifications-dropdown">
                <i className="bi bi-bell"></i>
                <Badge bg="danger" pill>
                  3
                </Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#action1">Notification 1</Dropdown.Item>
                <Dropdown.Item href="#action2">Notification 2</Dropdown.Item>
                <Dropdown.Item href="#action3">Notification 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown align="end" className="">
              <Dropdown.Toggle variant="light" id="messages-dropdown">
                <i className="bi bi-envelope"></i>
                <Badge bg="primary" pill>
                  5
                </Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#message1">Message 1</Dropdown.Item>
                <Dropdown.Item href="#message2">Message 2</Dropdown.Item>
                <Dropdown.Item href="#message3">Message 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown align="end" className=" d-flex">
              <Dropdown.Toggle variant="light" id="profile-dropdown">
                <div className='profile-Avatar'>
                  <img src={images.USER_ADMIN_MALE} alt="App Logo" />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                <Dropdown.Item href="#logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
