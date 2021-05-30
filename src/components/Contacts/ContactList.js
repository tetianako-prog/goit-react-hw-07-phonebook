import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import selectors from '../../redux/phonebook/phonebook-selectors';
import ListGroup from 'react-bootstrap/ListGroup';

class ContactList extends Component {
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  render() {
    return (
      <>
        {this.props.isLoading && <h1>Загружаем...</h1>}
        <ListGroup>
          {this.props.contactList.map(item => (
            <ContactItem
              key={item.id}
              info={item}
              onDeleteContact={this.props.onDeleteContact}
            />
          ))}
        </ListGroup>
      </>
    );
  }
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contactList: selectors.getVisibleContacts(state),
  //isLoading: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContact(id)),
  //fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
