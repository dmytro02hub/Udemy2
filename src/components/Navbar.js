import React from "react";
import { Menu, Icon, Button } from "element-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ username, onHandleSignOut }) => (
  <Menu mode="horizontal" theme="dark" defaultActive="1">
    <div className="nav-container">
      {/* App Title / Icon */}
      <Menu.Item index="1">
        <NavLink to="/" className="nav-link">
          <span className="app-title">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/3898/3898542.svg"
              alt="App Icon"
              className="app-icon"
            />
            Udemy 4:20
          </span>
        </NavLink>
      </Menu.Item>
      {/* Navbar Items */}

      <div className="nav-items">
        {/* Welcome  */}
        <Menu.Item index="2">
          <span className="app-user">Welcome, {username}</span>
        </Menu.Item>

        {/* Profile */}
        <Menu.Item index="3">
          <NavLink to="/profile" className="nav-link">
            <Icon name="setting" />
            <span> Profile</span>
          </NavLink>
        </Menu.Item>

        {/* Sign Out */}
        <Menu.Item index="4">
          <Button type="warning" onClick={onHandleSignOut}>
            Sign Out
          </Button>
        </Menu.Item>
        <Menu.Item index="5" />
      </div>
    </div>
  </Menu>
);

export default Navbar;
