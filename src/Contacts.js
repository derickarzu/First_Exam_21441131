import React, { Component } from 'react';
import { object } from 'prop-types';
import Contact from './Contact';
//import map from 'lodash/map';
import './Contacts.css';

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { contacts } = this.props;
    return <section className="Restaurants">{}</section>;
  }
}

Contacts.propTypes = {
  contacts: object
};

export default Contacts;
