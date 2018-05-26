import React, { Component } from 'react';
import { string } from 'prop-types';
//import './Contact.css';

class Contact extends Component {
  render() {
    const { name, email, phoneNumber, userName } = this.props;
    return (
      //Add class
      <div>
        {name}, {email}, {phoneNumber}, {userName}
        <button>X</button>
      </div>
    );
  }
}

Contact.propTypes = {
  name: string,
  email: string,
  phoneNumber: string,
  userName: string
};

export default Contact;
