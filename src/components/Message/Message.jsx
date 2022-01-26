import React from "react";
import "./Message.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/contacts/contacts-reducers";

function Message({ filter,filteredContacts }) {
  return (
    filter && (
      <h3 className="message__headline">
        {filteredContacts.length === 0 ? "Opps, no contacts found" : "Filtered results:"}
      </h3>
    )
  );
}

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
  filteredContacts: filterContacts(contacts.filter, contacts.items),
});

export default connect(mapStateToProps, null)(Message);

Message.propTypes = {
  filter: PropTypes.string.isRequired,
};
