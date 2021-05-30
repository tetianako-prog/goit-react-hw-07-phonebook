import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

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
