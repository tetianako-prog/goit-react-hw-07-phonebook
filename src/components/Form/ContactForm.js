import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import selectors from '../../redux/phonebook/phonebook-selectors';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = v4();
  numberInputId = v4();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.contacts.some(item => item.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.addContact(this.state);
    }
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ marginBottom: '40px' }}>
        <Form.Group controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTel">
          <Form.Label>Number</Form.Label>
          <Form.Control
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" variant="primary">
            Add contact
          </Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});
const mapDispatchToProps = dispatch => ({
  addContact: obj => dispatch(operations.addContact(obj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
