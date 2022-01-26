import React, { Component } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Message from "./components/Message/Message";

import "./styles/App.scss";

class App extends Component {
  render() {
    return (
      <>
        <div className="phonebook__wrapper">
          <div className="form-wrapper">
            <h1 className="headline">Phonebook</h1>
            <h2>Add new contact</h2>
            <ContactForm />
          </div>
          <div className="list-wrapper">
            <h2>Contacts</h2>
            <Filter />
            <Message />

            <ContactList />
          </div>
        </div>
      </>
    );
  }
}

export default App;
