import React, { Component } from 'react';
import Form from './../components/Form/ContactForm';
import Filter from './../components/Filter/Filter';
import ContactList from './../components/Contacts/ContactList';
import { connect } from 'react-redux';
import selectors from '../redux/phonebook/phonebook-selectors';
import operations from '../redux/phonebook/phonebook-operations';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container
        fluid="xl"
        style={{
          paddingTop: '20px',
        }}
      >
        <Row className="justify-content-md-center">
          <Col lg="5">
            <h1>Phonebook</h1>
            <Form />
            <Filter />
            {this.props.isLoading && <h1>Загружаем...</h1>}
            <ContactList />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
