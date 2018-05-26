import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewContact.css';

class NewContact extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    userName: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const contactObject = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      userName: this.userName
    };
    this.props.contacts.push(contactObject);
  };

  render() {
    const { name, email, phoneNumber, userName } = this.state;

    return (
      <form className="NewContact">
        Nombre:{' '}
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={event => this.setState({ name: event.target.value })}
        />{' '}
        Email:{' '}
        <input
          type="text"
          value={email}
          placeholder="E-mail Address"
          onChange={event => this.setState({ email: event.target.value })}
        />
        <br />
        <br />
        Numero:{' '}
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={event => this.setState({ phoneNumber: event.target.value })}
        />{' '}
        Usuario:{' '}
        <input
          type="text"
          value={userName}
          placeholder="User Name"
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <br />
        <br />
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewContact.propTypes = {
  contacts: PropTypes.array
};

export default NewContact;
