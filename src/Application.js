import React, { Component } from 'react';
import NewContact from './NewContact';
import Contacts from './Contacts';
import './Application.css';

var contacts = [];

class Application extends Component {
  render() {
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
