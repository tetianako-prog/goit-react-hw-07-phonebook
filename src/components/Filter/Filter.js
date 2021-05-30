import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Filter = ({ value, onChange }) => {
  const filterId = v4();
  return (
    <div style={{ marginBottom: '40px' }}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          Find contacts by name
        </InputGroup.Text>
        <FormControl
          type="text"
          value={value}
          onChange={onChange}
          id={filterId}
          placeholder="Enter name"
        />
      </InputGroup>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
