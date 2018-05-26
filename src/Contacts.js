import React, { Component } from 'react';
import { object } from 'prop-types';
import Contact from './Contact';
//import map from 'lodash/map';
//import './Contacts.css';

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contacts } = this.props;
    //Add Class to section and show all contacts
    return <section>{}</section>;
  }
}

Contacts.propTypes = {
  contacts: PropTypes.object
};

export default Contacts;
