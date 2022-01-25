import React, { Component } from "react";
import { connect } from "react-redux";
import { info } from "@pnotify/core";

import { addContact, deleteContact } from "./redux/store";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Message from "./components/Message/Message";

import "./styles/App.scss";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class App extends Component {
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    parsedContacts && this.setState({ contacts: parsedContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    this.props.contacts !== prevProps.contacts &&
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
  }
  deleteContact = (id) => {
    this.props.deleteContact(id);
    console.log(this.props.contacts);
  };

  addContact = (contactData) => {
    this.props.addContact(contactData);
    info({ text: `Contact successfully added`, delay: 700 });
    console.log(contactData);
  };

  filterOnChange = ({ target }) => this.props.filterOnChange(target.value);

  render() {
    return (
      <>
        <div className="phonebook__wrapper">
          <div className="form-wrapper">
            <h1 className="headline">Phonebook</h1>

            <h2>Add new contact</h2>
            <ContactForm onSubmitHandler={this.addContact} contacts={this.props.contacts} />
          </div>
          <div className="list-wrapper">
            <h2>Contacts</h2>
            <Filter />

            {this.props.filter && <Message />}

            <ContactList
              deleteContact={this.deleteContact}
              contacts={this.props.filteredContacts}
            />
          </div>
        </div>
      </>
    );
  }
}
const filterContacts = (query, contacts) =>
  contacts.filter((element) =>
    element.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

const mapStateToProps = ({ contacts, filter }) => ({
  filteredContacts: filterContacts(filter, contacts),
  contacts: contacts,
  filter:filter
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
  deleteContact: (contact) => dispatch(deleteContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
