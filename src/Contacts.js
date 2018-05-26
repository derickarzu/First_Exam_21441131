import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import map from 'lodash/map';
import './Contacts.css';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <section className="Contacts">{map(contacts, (contact, key) => <Contact key={key} {...contact} />)}</section>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array
};

export default Contacts;
