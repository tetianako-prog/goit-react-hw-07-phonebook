import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Nav>
      <NavLink to="/" exact className="nav-link">
        Home
      </NavLink>

      <NavLink to="/contacts" exact className="nav-link">
        Contacts
      </NavLink>
    </Nav>
  );
}

export default Navigation;
