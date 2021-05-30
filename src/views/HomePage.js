import React from 'react';
import Container from 'react-bootstrap/Container';

const HomePage = () => (
  <Container fluid="xl" className="text-center" style={{ paddingTop: '200px' }}>
    <h1>
      Welcome, with our app you can save numbers in your contact list{' '}
      <span role="img" aria-label="Иконка приветствия">
        &#9997;
      </span>
    </h1>
  </Container>
);

export default HomePage;
