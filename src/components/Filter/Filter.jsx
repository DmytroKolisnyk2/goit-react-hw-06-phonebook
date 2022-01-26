import React from "react";
import { nanoid } from "nanoid";
import "./Filter.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts/filter/filter-actions";

const filterId = nanoid();

function Filter({ onChange, value }) {
  return (
    <div className="filter">
      <h3 className="phonebook__headline">Find contact by name</h3>
      <label className="filter__title" htmlFor={filterId}>
        <input
          value={value}
          onChange={onChange}
          className="filter__input"
          type="text"
          name="filter"
          id={filterId}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  value: contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: ({ target }) => dispatch(changeFilter(target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
