import React, { Component } from 'react';
import NewContact from './NewContact';
import Contacts from './Contacts';
import './Application.css';

class Application extends Component {
  state = {
    contacts: null
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Your Contacts List</h1>
        </header>
        <div>
          <NewContact />
          <Contacts contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default Application;
