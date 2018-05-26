import React, { Component } from 'react';
import { object } from 'prop-types';
//import './NewContact.css';

class NewContact extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    userName: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    //Add to Contacts list
  };

  render() {
    const { name, email, phoneNumber, userName } = this.state;

    return (
      <form className="NewContact">
        <input
          type="text"
          value={name}
          placeholder="Contact Name"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <input
          type="text"
          value={email}
          placeholder="Contact Name"
          onChange={event => this.setState({ email: event.target.value })}
        />
        <input
          type="text"
          value={phoneNumber}
          placeholder="Contact Name"
          onChange={event => this.setState({ phoneNumber: event.target.value })}
        />
        <input
          type="text"
          value={userName}
          placeholder="Contact Name"
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewContact.propTypes = {
  contacts: object
};

export default NewContact;
