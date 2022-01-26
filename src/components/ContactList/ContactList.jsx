import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/items/items-actions";
import { filterContacts } from "../../redux/contacts/contacts-reducers";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className="list">
      {contacts.map((item) => (
        <ContactItem
          deleteContact={() => deleteContact(item.id)}
          key={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  contacts: filterContacts(contacts.filter, contacts.items),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contact) => dispatch(deleteContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
