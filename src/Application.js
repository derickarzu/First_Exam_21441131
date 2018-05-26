import React, { Component } from 'react';
import NewContact from './NewContact';
import Contacts from './Contacts';
import './Application.css';

class Application extends Component {
  state = {
    contacts: []
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Agenda</h1>
        </header>
        <div>
          <NewContact contacts={contacts} />
          <h3> Listado de Contactos </h3>
          <Contacts contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default Application;
