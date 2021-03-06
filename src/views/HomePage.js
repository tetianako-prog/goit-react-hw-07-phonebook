import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from './../redux/auth/auth-selectors';

const HomePage = ({ isLoggedIn }) => (
  <Container fluid="xl" className="text-center" style={{ paddingTop: '200px' }}>
    <h1>
      Welcome, with our app you can save numbers in your contact list{' '}
      <span role="img" aria-label="Иконка приветствия">
        &#9997;
      </span>{' '}
    </h1>
    {!isLoggedIn && (
      <div style={{ fontSize: '20px' }}>
        Please, <Link to="/register">Register</Link> or{' '}
        <Link to="/login">Login</Link>
      </div>
    )}
  </Container>
);

const mapStateToProps = state => ({
  isLoggedIn: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(HomePage);
