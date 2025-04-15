import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const navStyle = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    marginBottom: '20px',
  };

  return (
    <div style={navStyle}>
      <h1>Nav</h1>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          margin: '0 10px',
          textDecoration: 'none',
          color: isActive ? 'green' : '#333',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/About"
        style={({ isActive }) => ({
          margin: '0 10px',
          textDecoration: 'none',
          color: isActive ? 'green' : '#333',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/Protected"
        style={({ isActive }) => ({
          margin: '0 10px',
          textDecoration: 'none',
          color: isActive ? 'green' : '#333',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        Protected page
      </NavLink>
      <NavLink
        to="/Post"
        style={({ isActive }) => ({
          margin: '0 10px',
          textDecoration: 'none',
          color: isActive ? 'green' : '#333',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        Posts
      </NavLink>
      <NavLink
        to="/Products"
        style={({ isActive }) => ({
          margin: '0 10px',
          textDecoration: 'none',
          color: isActive ? 'green' : '#333',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        Products
      </NavLink>
      <NavLink
        to="/Contacts"
        style={({ isActive }) => ({
          margin: '0 10px',
          textDecoration: 'none',
          color: isActive ? 'green' : '#333',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        Contacts
      </NavLink>
    </div>
  );
}

export default Nav;
